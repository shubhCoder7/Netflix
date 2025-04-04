# Netflix-GPT

A Netflix clone enhanced with AI capabilities powered by GPT, allowing users to search for movies and TV shows using natural language.

[View Demo](https://netflix-gpt-indol.vercel.app) (Coming soon)

## Features

- **User Authentication**: Secure login and signup functionality using Firebase Auth
- **Browse Movies**: Explore movies categorized by genre, popularity, and trending
- **Movie Details**: View detailed information about movies with trailers
- **AI-Powered Search**: Use natural language to find movies and TV shows with GPT integration
- **Responsive Design**: (Coming soon) Optimized for all screen sizes

## Tech Stack

- **React**: Frontend framework
- **Redux Toolkit**: State management
- **Firebase**: Authentication and backend services
- **Tailwind CSS**: Styling and UI components
- **TMDB API**: Movie data
- **AI Integration**: GPT for movie recommendations and search
- **Vercel**: Deployment platform

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/shubhCoder7/Netflix.git
   cd Netflix
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   VITE_TMDB_TOKEN=your_tmdb_api_token
   VITE_OPENAI_KEY=your_openai_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Usage

- **Sign Up/Login**: Create an account or login with your credentials
- **Browse Movies**: Explore different categories on the homepage
- **Search Movies**: Use the search bar or GPT-powered search for more natural queries
- **Watch Trailers**: Click on a movie to view details and watch trailers

## Future Enhancements

- Responsive design for all devices
- User profiles and preferences
- Enhanced recommendation system
- Multi-language support
- Offline viewing capabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [TMDB API](https://www.themoviedb.org/) for providing movie data
- [Firebase](https://firebase.google.com/) for authentication and backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [OpenAI](https://openai.com/) for GPT integration
