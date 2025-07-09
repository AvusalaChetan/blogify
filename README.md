# Blogify

A modern, full-featured blogging platform built with Node.js, Express, and MongoDB. Create, share, and discover amazing stories with a beautiful, responsive interface.

## 🌟 Features

- **User Authentication**: Secure signup/signin with JWT tokens
- **Blog Management**: Create, view, and manage blog posts
- **Image Upload**: Support for cover images with Multer
- **Comments System**: Interactive commenting on blog posts
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **User Profiles**: Personalized user experiences
- **Secure**: Password hashing with bcrypt

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt
- **File Upload**: Multer
- **Template Engine**: EJS
- **Styling**: Tailwind CSS
- **Development**: Nodemon

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blogify-blogCreateapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/blogify
   PORT=9000
   JWT_SECRET=your-super-secret-jwt-key
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:9000`

## 📁 Project Structure

```
blogify/
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── .env               # Environment variables
├── config/
│   └── connection.js  # Database configuration
├── controllers/
│   └── auth.js        # Authentication controllers
├── middlewares/
│   └── authentication.js # Auth middleware
├── models/
│   ├── userModel.js   # User schema
│   ├── blogModel.js   # Blog schema
│   └── commentsModel.js # Comments schema
├── routers/
│   ├── user.js        # User routes
│   └── blog.js        # Blog routes
├── services/
│   └── authentication.js # JWT utilities
├── views/
│   ├── home.ejs       # Homepage
│   ├── addBlog.ejs    # Create blog page
│   ├── fullBlog.ejs   # Individual blog view
│   ├── signin.ejs     # Sign in page
│   ├── signup.ejs     # Sign up page
│   └── partials/      # Reusable components
└── public/
    └── images/        # Static assets and uploads
```

## 🔧 API Endpoints

### Authentication Routes
- `GET /user/signup` - Sign up page
- `POST /user/signup` - Create new user
- `GET /user/signin` - Sign in page
- `POST /user/signin` - User login
- `GET /user/logout` - User logout

### Blog Routes
- `GET /` - Homepage with all blogs
- `GET /blog/add-new` - Create blog page (protected)
- `POST /blog` - Create new blog (protected)
- `GET /blog/:id` - View individual blog
- `POST /blog/:id/comments` - Add comment (protected)

## 🎨 Features Overview

### User Authentication
- Secure user registration and login
- JWT-based session management
- Password hashing with bcrypt
- Protected routes for authenticated users

### Blog Management
- Create blogs with rich text content
- Upload cover images
- View all blogs on homepage
- Individual blog pages with full content

### Comments System
- Add comments to blog posts
- View all comments with author information
- Timestamps for comments

### Responsive Design
- Mobile-first design approach
- Beautiful gradients and modern UI
- Interactive navigation with dropdowns
- Tailwind CSS for styling

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

### Environment Variables
```env
MONGODB_URI=your_mongodb_connection_string
PORT=9000
JWT_SECRET=your_jwt_secret_key
```

## 🚀 Deployment

1. **Prepare for production**
   - Set production environment variables
   - Configure MongoDB Atlas for cloud database
   - Update JWT_SECRET with a strong key

2. **Deploy to platforms like:**
   - Heroku
   - Vercel
   - Railway
   - DigitalOcean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**A.Chetan**

## 🎯 Future Enhancements

- [ ] Blog categories and tags
- [ ] Search functionality
- [ ] User profiles with bio
- [ ] Like/dislike system
- [ ] Email notifications
- [ ] Rich text editor
- [ ] Social media sharing
- [ ] Blog analytics

## 🐛 Known Issues

- File upload size limitations
- Image optimization needed
- Search functionality not implemented

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ **Star this repo if you find it helpful!**