<img src="https://github.com/daviddprtma/continuum/blob/main/public/blockchain-1.png" style="text-align: center; width: 100px;"/>


# Continuum

Continuum is the seamless flow of assets from one state or person to another — a new paradigm for how we manage and transfer wealth in the digital age.

## Pitch Deck
Here's the pitch deck for Continuum: 👉[Continuum PDF]()

# Features
- Stream: Automate asset transfers with precise timing and logic, allowing users to stream wealth to designated recipients.
- Legacy: Create trustless legacy plans that activate based on predefined conditions (e.g., inactivity), ensuring permanent asset distribution without intermediaries.
- Relay: Facilitate synchronized smart transfers between parties, enabling secure and agreed-upon transactions without a middleman.

# Technologies Used
- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Wagmi: A collection of React Hooks for Ethereum.
- Web3Modal: A library to easily connect web3 wallets.
- Supabase: An open-source Firebase alternative providing a PostgreSQL database, authentication, and more.

# Installation

Before you begin, ensure you have the following installed:

- Node.js: Version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/en)
- pm (Node Package Manager) or Yarn: npm comes with Node.js, or you can install Yarn globally (npm install -g yarn).

1.) Clone Repository
First, clone the project repository to your local machine:
```shell
git clone https://github.com/youvandra/aegis-protocol
cd continuum
```

2.) Install Dependencies
Navigate into the project directory and install the required dependencies:
```shell
npm install
# or
yarn install
```

3.) Environment Variables Setup
This project uses Supabase for its backend and Wagmi/Web3Modal for wallet integration, which require environment variables.

Create a .env file in the root of your project directory (if it doesn't already exist) and add the following variables:

```shell
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
VITE_WAGMI_PROJECT_ID="YOUR_WAGMI_PROJECT_ID"
```

- VITE_SUPABASE_URL: Your Supabase project URL. You can find this in your Supabase project settings under API -> Project URL.
- VITE_SUPABASE_ANON_KEY: Your Supabase public anon key. You can find this in your Supabase project settings under API -> Project API keys.
- VITE_WAGMI_PROJECT_ID: Your Reown Project ID. You can obtain this from [Reown](https://reown.com/).
Important: Do not commit your .env file to version control. It is already included in .gitignore.

4.) Database Setup (Supabase)
This project relies on a Supabase PostgreSQL database. The schema is defined by migrations.

1.) Create a Supabase Project: If you don't have one, create a new project on [Supabase](https://supabase.com/).

2.) Run Migrations: The project's database schema is managed via Supabase migrations. You will need to apply these migrations to your Supabase project. Typically, you would use the Supabase CLI for this:

```shell
# Ensure you have the Supabase CLI installed:
# npm install -g supabase
# or brew install supabase/supabase/supabase

npx supabase login
npx supabase link --project-ref YOUR_SUPABASE_PROJECT_REF
npx supabase db push
```
Replace YOUR_SUPABASE_PROJECT_REF with your actual Supabase project reference (found in your project URL or settings).

5. Run the Development Server
Once all dependencies are installed and environment variables are set, you can start the development server:

```shell
npm run dev
# or
yarn dev
```

6. Build for Production
To create a production-ready build of the application:
```shell
npm run build
# or
yarn build
```
This command compiles the application into the dist directory, ready for deployment.


# Contribute

1.) Fork the repository
2.) Create a feature branch (git checkout -b feature/amazing-feature)
3.) Commit your changes (git commit -m 'Add some amazing feature')
4.) Push to the branch (git push origin feature/amazing-feature)
5.) Open a Pull Request


# License

You can also mention what license the project uses. I usually add it like this:

[MIT license](./LICENSE)

## Demo Video 🎥
Here's the demo video for ShowFarm👇
<br> 

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi//0.jpg)]()


