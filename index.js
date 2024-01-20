import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://farzanayesmin:Solutya@solutya.cfio8dx.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['User', 'Admin', 'SuperAdmin'] },
});

const UserProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    address: String,
    phone: String,
});

const productSchema = new mongoose.Schema({
    productName: String,
    productDetails: String,
});

const User = mongoose.model('User', userSchema);
const UserProfile = mongoose.model('UserProfile', UserProfileSchema);
const Product = mongoose.model('Product', productSchema);

const jwtSecretKey = 'Solutya';
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        req.user = jwt.verify(token, jwtSecretKey);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

app.get('/', (req, res) => {
    res.send('Hello!!');
});

app.post('/signup', async (req, res) => {
    try {
        const {username, password, role, name, address, phone} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            role,
        });

        const savedUser = await newUser.save();

        const userProfile = new UserProfile({
            userId: savedUser._id,
            name,
            address,
            phone,
        });

        await userProfile.save();

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if (!user) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const userProfile = await UserProfile.findOne({userId: user._id});

        const token = jwt.sign(
            {
                userId: user._id,
                username,
                role: user.role,
                name: userProfile.name,
                address: userProfile.address,
                phone: userProfile.phone
            },
            jwtSecretKey,
            {expiresIn: '1h'}
        );

        res.json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.post('/logout', authenticateToken, (req, res) => {
    res.json({message: 'Logout successful'});
});

app.get('/products', authenticateToken, async (req, res) => {
    try {
        const {role} = req.user;

        if (role === 'User') {
            return res.status(403).json({error: 'Forbidden: You do not have permission to access products'});
        }

        const products = await Product.find({}, 'productName productDetails');
        res.json({products});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.post('/products', authenticateToken, async (req, res) => {
    try {
        const {role} = req.user;

        if (role !== 'Admin' && role !== 'SuperAdmin') {
            return res.status(403).json({error: 'Forbidden: You do not have permission to add products'});
        }

        const {productName, productDetails} = req.body;

        const newProduct = new Product({
            productName,
            productDetails,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({message: 'Product added successfully', savedProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


app.put('/products/:productId', authenticateToken, async (req, res) => {
    try {
        const {role} = req.user;

        if (role !== 'Admin' && role !== 'SuperAdmin') {
            return res.status(403).json({error: 'Forbidden: You do not have permission to edit products'});
        }

        const productId = req.params.productId;
        const {productName, productDetails} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {productName, productDetails},
            {new: true}
        );

        if (!updatedProduct) {
            return res.status(404).json({error: 'Product not found'});
        }

        res.json({message: 'Product updated successfully', updatedProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.delete('/products/:productId', authenticateToken, async (req, res) => {
    try {
        const {role} = req.user;

        if (role !== 'SuperAdmin') {
            return res.status(403).json({error: 'Forbidden: You do not have permission to delete products'});
        }

        const productId = req.params.productId;

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({error: 'Product not found'});
        }

        res.json({message: 'Product deleted successfully', deletedProduct});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
