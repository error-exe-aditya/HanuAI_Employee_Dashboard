# Run Guide: HanuAI Employee Dashboard

This guide will help you set up and run the project locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18.x or higher recommended)
- [Git](https://git-scm.com/)

---

## 1. Clone the Repository

Open your terminal and run the following commands:

```bash
# Clone the project
git clone https://github.com/error-exe-aditya/HanuAI_Employee_Dashboard.git

# Navigate into the project directory
cd HanuAI_Employee_Dashboard
```

---

## 2. Install Dependencies

Run the following command to install all necessary packages:

```bash
npm install
```

---

## 3. Run Locally (Development Mode)

To start the project in development mode (with hot-reloading), run:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 4. Build for Production

If you want to test the production build locally:

```bash
# Create the optimized production build
npm run build

# Start the production server
npm run start
```

---

## 5. Deployment

The easiest way to deploy this project is via **Vercel**:

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Vercel will automatically detect Next.js and deploy your site.

---

## Troubleshooting

- **Node Version:** If you see errors during installation, ensure you are using a recent version of Node.js.
- **Port Conflict:** If port `3000` is already in use, Next.js will typically try `3001` or you can specify a port using `npm run dev -- -p <port>`.
