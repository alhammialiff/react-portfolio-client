# Stock Portfolio Dashboard

A comprehensive React-based dashboard application designed for stock investors to track, analyze, and optimize their investment portfolio with real-time data and AI-powered insights.

## Overview

The Stock Portfolio Dashboard is a modern web application that empowers investors to manage their stock portfolios efficiently. It provides real-time portfolio tracking, profit & loss (P&L) calculations, and intelligent guidance through an integrated chatbot to help users make informed investment decisions.

## Features

### 1. **Ticker Symbol Management**
- Add and manage ticker symbols for stocks in your portfolio
- Support for multiple stock exchanges and markets
- Easy-to-use interface for adding new holdings
- Quick search and validation of ticker symbols

### 2. **Share Quantity Tracking**
- Record the number of shares you own for each stock
- Update share quantities as you buy or sell
- Historical tracking of your position changes
- Support for fractional shares

### 3. **Real-Time P&L Calculation**
- Automatic calculation of current portfolio value based on real-time market prices
- Display profit and loss for individual positions
- Overall portfolio P&L summary
- Percentage gain/loss metrics
- Color-coded indicators for gains (green) and losses (red)
- Support for multiple currencies

### 4. **AI-Powered Chatbot Assistant**
- Interactive chatbot to guide portfolio optimization
- Get personalized investment recommendations
- Ask questions about your portfolio performance
- Receive speculative projections for potential improvements
- Scenario analysis: "What if I sold X and bought Y?"
- Risk assessment and diversification suggestions

### 5. **P&L Projection Charts**
- Interactive charts comparing current P&L vs. projected P&L
- Visual representation of chatbot recommendations
- Multiple chart types: line charts, bar charts, and pie charts
- Time-based projections (1 month, 3 months, 6 months, 1 year)
- Side-by-side comparison of current portfolio vs. optimized scenarios
- Export charts as images for reporting

## Technology Stack

- **Frontend Framework**: React.js
- **State Management**: Redux / Context API
- **Charting Library**: Chart.js / Recharts
- **API Integration**: REST API for market data
- **AI Chatbot**: OpenAI API / Custom NLP model
- **Styling**: CSS Modules / Styled Components
- **Build Tool**: Webpack / Vite

## Installation

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn package manager
- API keys for stock market data provider (e.g., Alpha Vantage, IEX Cloud)
- API key for AI chatbot (e.g., OpenAI)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/alhammialiff/react-portfolio-client.git
   cd react-portfolio-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_STOCK_API_KEY=your_stock_api_key
   REACT_APP_CHATBOT_API_KEY=your_chatbot_api_key
   REACT_APP_API_BASE_URL=https://api.stockprovider.com
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## Usage

### Adding Stocks to Your Portfolio

1. Click the **"Add Stock"** button on the dashboard
2. Enter the ticker symbol (e.g., AAPL, GOOGL, TSLA)
3. Input the number of shares you own
4. Optionally add purchase price for accurate P&L calculation
5. Click **"Save"** to add to your portfolio

### Viewing Your P&L

- The dashboard automatically displays your current P&L
- Real-time updates based on market data
- View individual stock performance or overall portfolio metrics
- Filter by gain/loss, sector, or time period

### Using the Chatbot

1. Click the **chatbot icon** in the bottom-right corner
2. Ask questions like:
   - "How can I improve my portfolio diversification?"
   - "What if I sell 50 shares of AAPL and buy MSFT?"
   - "Show me a projection if tech stocks grow 10% this quarter"
3. Review the chatbot's recommendations
4. Click **"Show Projection"** to visualize the impact on charts

### Analyzing Projections

- The chatbot generates comparison charts automatically
- **Current P&L**: Shows your existing portfolio performance
- **Projected P&L**: Displays potential outcomes based on recommendations
- Use the toggle to switch between different projection scenarios
- Export charts for further analysis or sharing

## Key Workflows

### Workflow 1: Portfolio Setup
```
Add Ticker → Enter Shares → View Current P&L → Monitor Performance
```

### Workflow 2: Portfolio Optimization
```
Open Chatbot → Ask for Advice → Review Projections → View Comparison Charts → Make Decisions
```

### Workflow 3: Performance Tracking
```
Dashboard Overview → Individual Stock Details → P&L History → Trend Analysis
```

## Features in Detail

### Portfolio Dashboard
- **Quick Stats**: Total value, daily change, overall P&L
- **Holdings Table**: List of all stocks with key metrics
- **Performance Charts**: Historical performance visualization
- **Alerts**: Notifications for significant price movements

### Chatbot Capabilities
- Natural language processing for user queries
- Context-aware recommendations based on your portfolio
- Risk tolerance assessment
- Sector analysis and diversification advice
- Tax-loss harvesting suggestions
- Rebalancing recommendations

### Chart Types
- **Line Charts**: Track P&L trends over time
- **Bar Charts**: Compare current vs. projected performance
- **Pie Charts**: Visualize portfolio allocation
- **Area Charts**: Show cumulative gains/losses

## API Integration

The application integrates with the following services:

- **Stock Market Data API**: Real-time and historical stock prices
- **AI/ML Service**: Powers the chatbot recommendations
- **News API**: Display relevant market news and insights

## Data Privacy & Security

- All portfolio data is stored locally or encrypted
- API keys are secured via environment variables
- No sensitive financial information is shared without consent
- Regular security audits and updates

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Mobile app version (React Native)
- [ ] Integration with brokerage accounts for automatic sync
- [ ] Advanced analytics and backtesting
- [ ] Social features for sharing strategies
- [ ] Multi-portfolio support
- [ ] Cryptocurrency support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@stockportfolio.app
- Documentation: [Wiki](https://github.com/alhammialiff/react-portfolio-client/wiki)

## Acknowledgments

- Market data provided by financial data providers
- AI recommendations powered by advanced machine learning models
- Icons and design assets from community resources

---

**Disclaimer**: This application is for informational and educational purposes only. It does not constitute financial advice. Always consult with a qualified financial advisor before making investment decisions.