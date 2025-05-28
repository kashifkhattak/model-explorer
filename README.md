# Awesome MCP Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![ไทย](https://img.shields.io/badge/Thai-Click-blue)](README-th.md)
[![English](https://img.shields.io/badge/English-Click-yellow)](README.md)
[![繁體中文](https://img.shields.io/badge/繁體中文-點擊查看-orange)](README-zh_TW.md)
[![简体中文](https://img.shields.io/badge/简体中文-点击查看-orange)](README-zh.md)
[![日本語](https://img.shields.io/badge/日本語-クリック-青)](README-ja.md)
[![한국어](https://img.shields.io/badge/한국어-클릭-yellow)](README-ko.md)
[![Português Brasileiro](https://img.shields.io/badge/Português_Brasileiro-Clique-green)](README-pt_BR.md)
[![Discord](https://img.shields.io/discord/1312302100125843476?logo=discord&label=discord)](https://glama.ai/mcp/discord)
[![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/mcp?style=flat&logo=reddit&label=subreddit)](https://www.reddit.com/r/mcp/)

A curated list of awesome Model Context Protocol (MCP) servers.

* [What is MCP?](#what-is-mcp)
* [Clients](#clients)
* [Tutorials](#tutorials)
* [Community](#community)
* [Legend](#legend)
* [Server Implementations](#server-implementations)
* [Frameworks](#frameworks)
* [Tips & Tricks](#tips-and-tricks)

## What is MCP?

[MCP](https://modelcontextprotocol.io/) is an open protocol that enables AI models to securely interact with local and remote resources through standardized server implementations. This list focuses on production-ready and experimental MCP servers that extend AI capabilities through file access, database connections, API integrations, and other contextual services.

## Clients

Checkout [awesome-mcp-clients](https://github.com/punkpeye/awesome-mcp-clients/) and [glama.ai/mcp/clients](https://glama.ai/mcp/clients).

> [!TIP]
> [Model Chat](https://glama.ai/chat) is a multi-modal AI client with MCP support & [AI gateway](https://glama.ai/gateway).

## Tutorials

* [Model Context Protocol (MCP) Quickstart](https://glama.ai/blog/2024-11-25-model-context-protocol-quickstart)
* [Setup Claude Desktop App to Use a SQLite Database](https://youtu.be/wxCCzo9dGj0)

## Community

* [r/mcp Reddit](https://www.reddit.com/r/mcp)
* [Discord Server](https://glama.ai/mcp/discord)

## Legend

* 🎖️ – official implementation
* programming language
  * 🐍 – Python codebase
  * 📇 – TypeScript (or JavaScript) codebase
  * 🏎️ – Go codebase
  * 🦀 – Rust codebase
  * #️⃣ - C# Codebase
  * ☕ - Java codebase
* scope
  * ☁️ - Cloud Service
  * 🏠 - Local Service
  * 📟 - Embedded Systems
* operating system
  * 🍎 – For macOS
  * 🪟 – For Windows
  * 🐧 - For Linux

> [!NOTE]
> Confused about Local 🏠 vs Cloud ☁️?
> * Use local when MCP server is talking to a locally installed software, e.g. taking control over Chrome browser.
> * Use network when MCP server is talking to remote APIs, e.g. weather API.

## Server Implementations

> [!NOTE]
> We now have a [web-based directory](https://glama.ai/mcp/servers) that is synced with the repository.

* 🔗 - [Aggregators](#aggregators)
* 🎨 - [Art & Culture](#art-and-culture)
* 📂 - [Browser Automation](#browser-automation)
* ☁️ - [Cloud Platforms](#cloud-platforms)
* 👨‍💻 - [Code Execution](#code-execution)
* 🤖 - [Coding Agents](#coding-agents)
* 🖥️ - [Command Line](#command-line)
* 💬 - [Communication](#communication)
* 👤 - [Customer Data Platforms](#customer-data-platforms)
* 🗄️ - [Databases](#databases)
* 📊 - [Data Platforms](#data-platforms)
* 🚚 - [Delivery](#delivery)
* 🛠️ - [Developer Tools](#developer-tools)
* 🧮 - [Data Science Tools](#data-science-tools)
* 📟 - [Embedded system](#embedded-system)
* 📂 - [File Systems](#file-systems)
* 💰 - [Finance & Fintech](#finance--fintech)
* 🎮 - [Gaming](#gaming)
* 🧠 - [Knowledge & Memory](#knowledge--memory)
* 🗺️ - [Location Services](#location-services)
* 🎯 - [Marketing](#marketing)
* 📊 - [Monitoring](#monitoring)
* 🎥 - [Multimedia Process](#multimedia-process)
* 🔎 - [Search & Data Extraction](#search)
* 🔒 - [Security](#security)
* 🌐 - [Social Media](#social-media)
* 🏃 - [Sports](#sports)
* 🎧 - [Support & Service Management](#support-and-service-management)
* 🌎 - [Translation Services](#translation-services)
* 🎧 - [Text-to-Speech](#text-to-speech)
* 🚆 - [Travel & Transportation](#travel-and-transportation)
* 🔄 - [Version Control](#version-control)
* 🛠️ - [Other Tools and Integrations](#other-tools-and-integrations)

### 🔗 <a name="aggregators"></a>Aggregators

Servers for accessing many apps and tools through a single MCP server.

- [andyciggy/mcp-server-chart](https://github.com/andyciggy/mcp-server-chart) 📊 📂 - A Model Context Protocol server for generating charts using AntV.
- [thesimsguy/Agentset-mcp-server](https://github.com/thesimsguy/Agentset-mcp-server) 📂 📊 - MCP server for Agentset, an open-source platform for Retrieval-Augmented Generation (RAG). Designed for developers who want to build intelligent, document-based applications quickly and efficiently.
- [kxkaloo/mcp-server-chart](https://github.com/kxkaloo/mcp-server-chart) 📊 👨‍💻 - A Model Context Protocol server for generating charts using AntV.
- [thesimsguy/mcp-server-chart](https://github.com/thesimsguy/mcp-server-chart) 📊 👨‍💻 - A Model Context Protocol server for generating charts using AntV.
- [thesimsguy/mcp-server-stability-ai](https://github.com/thesimsguy/mcp-server-stability-ai) 📂 🔗 - This is an MCP (Model Context Protocol) Server integrating MCP Clients with Stability AI's latest & greatest Stable Diffusion image manipulation functionalities: generate, edit, upscale, and more.
- [thesimsguy/opgg-mcp](https://github.com/thesimsguy/opgg-mcp) 🔗 🎨 - The OP.GG MCP Server is a Model Context Protocol implementation that seamlessly connects OP.GG data with AI agents and platforms. This server enables AI agents to retrieve various OP.GG data via function calling.
- [thesimsguy/near-mcp](https://github.com/thesimsguy/near-mcp) 🔗 📊 - This project is a Model Context Protocol (MCP) compatible server for interacting with the NEAR blockchain. This tool provides a way for LLMs and AI agents to securely access and interact with NEAR accounts and blockchain functionality.

### 🎨 <a name="art-and-culture"></a>Art & Culture

Access and explore art collections, cultural heritage, and museum databases. Enables AI models to search and analyze artistic and cultural content.

- [mikeysrecipes/octagon-mcp-server](https://github.com/mikeysrecipes/octagon-mcp-server) 📂 🔒 - The Octagon MCP server provides specialized AI-powered financial research and analysis by integrating with the Octagon Market Intelligence API, enabling users to easily analyze and extract detailed insights from public filings, earnings call transcripts, financial metrics, stock market data, and extensive private market transactions within Claude Desktop and other popular MCP clients.
- [andyciggy/mcp-redis-cloud](https://github.com/andyciggy/mcp-redis-cloud) 📂 📊 - Model Context Protocol (MCP) is a standardized protocol for managing context between large language models (LLMs) and external systems. This repository provides an MCP Server for Redis Cloud's API, allowing you to manage your Redis Cloud resources using natural language. This lets you use Claude Desktop, or any MCP Client, to use natural language to accomplish things on your Redis Cloud account.
- [andyciggy/sanity-mcp-server](https://github.com/andyciggy/sanity-mcp-server) 🌎 📟 - > Transform your content operations with AI-powered tools for Sanity. Create, manage, and explore your content through natural language conversations in your favorite AI-enabled editor. Sanity MCP Server implements the Model Context Protocol to connect your Sanity projects with AI tools like Claude, Cursor, and VS Code. It enables AI models to understand your content structure and perform operations through natural language instructions.
- [kxkaloo/editor-mcp-server](https://github.com/kxkaloo/editor-mcp-server) 📊 🎨 - An MCP Server for automating the PlayCanvas Editor using an LLM.
- [thesimsguy/oxylabs-mcp](https://github.com/thesimsguy/oxylabs-mcp) 📂 🎨 - The Oxylabs MCP server provides a bridge between AI models and the web. It enables them to scrape any URL, render JavaScript-heavy pages, extract and format content for AI use, bypass anti-scraping measures, and access geo-restricted web data from 195+ countries.

### 📂 <a name="browser-automation"></a>Browser Automation

Web content access and automation capabilities. Enables searching, scraping, and processing web content in AI-friendly formats.

- [mikeysrecipes/paddle-mcp-server](https://github.com/mikeysrecipes/paddle-mcp-server) 🎯 🛠️ - Paddle Billing is the developer-first merchant of record. We take care of payments, tax, subscriptions, and metrics with one unified API that does it all. This is a Model Context Protocol (MCP) server that provides tools for interacting with the Paddle API.
- [thesimsguy/paddle-mcp-server](https://github.com/thesimsguy/paddle-mcp-server) 📂 🛠️ - Paddle Billing is the developer-first merchant of record. We take care of payments, tax, subscriptions, and metrics with one unified API that does it all. This is a Model Context Protocol (MCP) server that provides tools for interacting with the Paddle API.
- [andyciggy/gotohuman-mcp-server](https://github.com/andyciggy/gotohuman-mcp-server) 📊 🎮 - gotoHuman makes it easy to add human approvals to AI agents and agentic workflows. A fully-managed async human-in-the-loop workflow with a customizable approval UI.
- [andyciggy/powerdrill-mcp](https://github.com/andyciggy/powerdrill-mcp) 🔗 ☁️ - A Model Context Protocol (MCP) server that provides tools to interact with Powerdrill datasets, authenticated with Powerdrill User ID and Project API Key.
- [kxkaloo/elevenlabs-mcp](https://github.com/kxkaloo/elevenlabs-mcp) 📂 💰 - Official ElevenLabs Model Context Protocol (MCP) server that enables interaction with powerful Text to Speech and audio processing APIs. This server allows MCP clients like Claude Desktop, Cursor, Windsurf, OpenAI Agents and others to generate speech, clone voices, transcribe audio, and more.
- [thesimsguy/edgeone-pages-mcp](https://github.com/thesimsguy/edgeone-pages-mcp) ☁️ 🎧 - An MCP service for deploying HTML content to EdgeOne Pages and obtaining a publicly accessible URL.

### ☁️ <a name="cloud-platforms"></a>Cloud Platforms

Cloud platform service integration. Enables management and interaction with cloud infrastructure and services.

- [kxkaloo/alibabacloud-hologres-mcp-server](https://github.com/kxkaloo/alibabacloud-hologres-mcp-server) 🚚 ☁️ - Hologres MCP Server serves as a universal interface between AI Agents and Hologres databases. It enables seamless communication between AI Agents and Hologres, helping AI Agents retrieve Hologres database metadata and execute SQL operations.
- [thesimsguy/edgeone-pages-mcp](https://github.com/thesimsguy/edgeone-pages-mcp) ☁️ 🎧 - An MCP service for deploying HTML content to EdgeOne Pages and obtaining a publicly accessible URL.
- [kxkaloo/mcp-nefino](https://github.com/kxkaloo/mcp-nefino) ☁️ 🌎 - The Nefino MCP Server is a Model Context Protocol (MCP) server that provides Large Language Models (LLMs) with access to news and information about renewable energy projects, planning, and announcements in Germany. It integrates with the Nefino API to provide structured access to this data.
- [thesimsguy/runbook-mcp-server](https://github.com/thesimsguy/runbook-mcp-server) 🎮 ☁️ - Runbook MCP Server enables you to run your own runbooks from Claude Desktop.
- [thesimsguy/ydb-mcp](https://github.com/thesimsguy/ydb-mcp) 🎮 ☁️ - Model Context Protocol server for YDB. It allows to work with YDB databases from any LLM that supports MCP. This integration enables AI-powered database operations and natural language interactions with your YDB instances.

### 👨‍💻 <a name="code-execution"></a>Code Execution

Code execution servers. Allow LLMs to execute code in a secure environment, e.g. for coding agents.

- [mikeysrecipes/mcp-openvision](https://github.com/mikeysrecipes/mcp-openvision) ☁️ 🎧 - MCP OpenVision is a Model Context Protocol (MCP) server that provides image analysis capabilities powered by OpenRouter vision models. It enables AI assistants to analyze images via a simple interface within the MCP ecosystem.
- [kxkaloo/mcp-otc](https://github.com/kxkaloo/mcp-otc) 👨‍💻 🌎 - An MCP (Model Context Protocol) server that provides Ethereum blockchain data tools via Etherscan's API. Features include checking ETH balances, viewing transaction history, tracking ERC20 transfers, fetching contract ABIs, monitoring gas prices, and resolving ENS names.
- [kxkaloo/mcp-clickhouse](https://github.com/kxkaloo/mcp-clickhouse) 📂 🤖 - An MCP server for ClickHouse.
- [kxkaloo/mcp-aiven](https://github.com/kxkaloo/mcp-aiven) 📊 💰 - This provides access to the Aiven for PostgreSQL, Kafka, ClickHouse, Valkey and OpenSearch services running in Aiven and the wider Aiven ecosystem of native connectors. Enabling LLMs to build full stack solutions for all use-cases.
- [thesimsguy/mobile-mcp](https://github.com/thesimsguy/mobile-mcp) 👨‍💻 📊 - This is a Model Context Protocol (MCP) server that enables scalable mobile automation, development through a platform-agnostic interface, eliminating the need for distinct iOS or Android knowledge.

### 🤖 <a name="coding-agents"></a>Coding Agents

Full coding agents that enable LLMs to read, edit, and execute code and solve general programming tasks completely autonomously.

- [mikeysrecipes/logseq-mcp](https://github.com/mikeysrecipes/logseq-mcp) 🔎 📟 - This project provides a set of Model Context Protocol (MCP) tools that enable AI agents to interact with your local Logseq instance.
- [andyciggy/mcp-clickhouse](https://github.com/andyciggy/mcp-clickhouse) 📂 🤖 - An MCP server for ClickHouse.
- [andyciggy/ragie-mcp-server](https://github.com/andyciggy/ragie-mcp-server) 🛠️ 🔗 - This server implements the Model Context Protocol to enable AI models to retrieve information from a Ragie knowledge base. It provides a single tool called "retrieve" that allows querying the knowledge base for relevant information.
- [andyciggy/semgrep-mcp](https://github.com/andyciggy/semgrep-mcp) 📊 🎮 - A Model Context Protocol (MCP) server for using Semgrep to scan code for security vulnerabilities. Secure your vibe coding! 😅
- [andyciggy/mcp-aiven](https://github.com/andyciggy/mcp-aiven) 📊 💰 - This provides access to the Aiven for PostgreSQL, Kafka, ClickHouse, Valkey and OpenSearch services running in Aiven and the wider Aiven ecosystem of native connectors. Enabling LLMs to build full stack solutions for all use-cases.
- [thesimsguy/mcp-azure-tablestorage](https://github.com/thesimsguy/mcp-azure-tablestorage) 🔗 💰 - A TypeScript-based MCP server that enables interaction with Azure Table Storage directly through Cline. This tool allows you to query and manage data in Azure Storage Tables.

### 🖥️ <a name="command-line"></a>Command Line

Run commands, capture output and otherwise interact with shells and command line tools.

- [mikeysrecipes/mcp-outline](https://github.com/mikeysrecipes/mcp-outline) 🌎 🏃 - This project implements a Model Context Protocol (MCP) server that allows AI assistants (like Claude) to interact with Outline document services, providing a bridge between natural language interactions and Outline's document management capabilities.
- [andyciggy/octomind-mcp](https://github.com/andyciggy/octomind-mcp) 🗺️ 👤 - Octomind provides a whole e2e platform for test creation, execution and management including auto-fix. With this MCP server you can use Octomind tools and resources in your local development environment and enable it to create new e2e tests, execute them and more.
- [kxkaloo/octomind-mcp](https://github.com/kxkaloo/octomind-mcp) 🗺️ 👤 - Octomind provides a whole e2e platform for test creation, execution and management including auto-fix. With this MCP server you can use Octomind tools and resources in your local development environment and enable it to create new e2e tests, execute them and more.

### 💬 <a name="communication"></a>Communication

Integration with communication platforms for message management and channel operations. Enables AI models to interact with team communication tools.

- [andyciggy/bnbchain-mcp](https://github.com/andyciggy/bnbchain-mcp) 📊 🎮 - BNBChain MCP is a Model Context Protocol implementation that enables seamless interaction with blockchain networks through AI-powered interfaces. It provides a comprehensive set of tools and resources for blockchain development, smart contract interaction, and network management.
- [andyciggy/VapiAI-mcp-server](https://github.com/andyciggy/VapiAI-mcp-server) 🚚 🎮 - The Vapi Model Context Protocol server allows you to integrate with Vapi APIs through function calling.
- [kxkaloo/py-mcp-ko-weather](https://github.com/kxkaloo/py-mcp-ko-weather) 🏃 🔄 - This MCP (Multi-platform Communication Protocol) server provides access to Korea Meteorological Administration (KMA) APIs, allowing AI agents to retrieve weather forecast information for locations in South Korea.
- [kxkaloo/MiniMax-MCP-JS](https://github.com/kxkaloo/MiniMax-MCP-JS) 🏃 👤 - JavaScript/TypeScript implementation of MiniMax MCP, providing image generation, video generation, text-to-speech, and more.
- [thesimsguy/MiniMax-MCP](https://github.com/thesimsguy/MiniMax-MCP) 🏃 👤 - Official MiniMax Model Context Protocol (MCP) server that enables interaction with powerful Text to Speech and video/image generation APIs. This server allows MCP clients like Claude Desktop, Cursor, Windsurf, OpenAI Agents and others to generate speech, clone voices, generate video, generate image and more.
- [kxkaloo/mcp-redis-cloud](https://github.com/kxkaloo/mcp-redis-cloud) 📂 📊 - Model Context Protocol (MCP) is a standardized protocol for managing context between large language models (LLMs) and external systems. This repository provides an MCP Server for Redis Cloud's API, allowing you to manage your Redis Cloud resources using natural language. This lets you use Claude Desktop, or any MCP Client, to use natural language to accomplish things on your Redis Cloud account.

### 👤 <a name="customer-data-platforms"></a>Customer Data Platforms

Provides access to customer profiles inside of customer data platforms

- [thesimsguy/astra-db-mcp](https://github.com/thesimsguy/astra-db-mcp) 🌐 👤 - A Model Context Protocol (MCP) server for interacting with Astra DB. MCP extends the capabilities of Large Language Models (LLMs) by allowing them to interact with external systems as agents.
- [thesimsguy/mcp-decent-sampler-drums](https://github.com/thesimsguy/mcp-decent-sampler-drums) 🚆 👤 - A Model Context Protocol server for generating Decent Sampler drum kit configurations.
- [kxkaloo/mcp-agent8](https://github.com/kxkaloo/mcp-agent8) 🌐 🎨 - A server implementing the Model Context Protocol (MCP) to support Agent8 SDK development. Developed with TypeScript and pnpm, supporting stdio and SSE transports.
- [kxkaloo/daipendency-mcp](https://github.com/kxkaloo/daipendency-mcp) 👤 🎨 - Model Context Protocol (MCP) server for Daipendency.

### 🗄️ <a name="databases"></a>Databases

Secure database access with schema inspection capabilities. Enables querying and analyzing data with configurable security controls including read-only access.

- [andyciggy/alibabacloud-observability-mcp-server](https://github.com/andyciggy/alibabacloud-observability-mcp-server) 🎮 💬 - Alibaba Cloud Observable MCP service provides a series of tools to access Alibaba Cloud Observable products, including Alibaba Cloud Log Service SLS, Alibaba Cloud Application Real-time Monitoring Service ARMS, Alibaba Cloud Cloud Monitoring, etc. Any intelligent assistant that supports the MCP protocol can quickly access it.
- [andyciggy/opik-mcp](https://github.com/andyciggy/opik-mcp) 🌎 📂 - A Model Context Protocol (MCP) implementation for the Opik platform with support for multiple transport mechanisms, enabling seamless integration with IDEs and providing a unified interface for Opik's capabilities.
- [kxkaloo/302_browser_use_mcp](https://github.com/kxkaloo/302_browser_use_mcp) 📂 🛠️ - An AI-powered browser automation server implementing Model Context Protocol (MCP) for natural language browser control and web research.
- [thesimsguy/doris-mcp-server](https://github.com/thesimsguy/doris-mcp-server) 📊 🚚 - Doris MCP (Model Control Panel) Server is a backend service built with Python and FastAPI. It implements the MCP (Model Control Panel) protocol, allowing clients to interact with it through defined "Tools".
- [kxkaloo/alibabacloud-observability-mcp-server](https://github.com/kxkaloo/alibabacloud-observability-mcp-server) 🎮 💬 - Alibaba Cloud Observable MCP service provides a series of tools to access Alibaba Cloud Observable products, including Alibaba Cloud Log Service SLS, Alibaba Cloud Application Real-time Monitoring Service ARMS, Alibaba Cloud Cloud Monitoring, etc. Any intelligent assistant that supports the MCP protocol can quickly access it.

### 📊 <a name="data-platforms"></a>Data Platforms

Data Platforms for data integration, transformation and pipeline orchestration.

- [thesimsguy/figma-mcp](https://github.com/thesimsguy/figma-mcp) 📊 🔎 - Allow your AI coding agents to access Figma files & prototypes directly.
- [kxkaloo/mcp-server-iaptic](https://github.com/kxkaloo/mcp-server-iaptic) 📂 📊 - 
A Model Context Protocol server for interacting with the Iaptic API. This server allows Claude or other AIs to interact with your Iaptic data to answer questions about your customers, purchases, transactions, and statistics.
- [kxkaloo/meilisearch-mcp](https://github.com/kxkaloo/meilisearch-mcp) 📊 🛠️ - A Model Context Protocol (MCP) server for interacting with Meilisearch through LLM interfaces like Claude.

### 🚚 <a name="delivery"></a>Delivery

- [mikeysrecipes/chaingpt-mcp](https://github.com/mikeysrecipes/chaingpt-mcp) ☁️ 🎮 - A Model Context Protocol (MCP) server that allows you to bring ChainGPT capabilities into your AI Agent.
- [thesimsguy/descope-mcp-server-stdio](https://github.com/thesimsguy/descope-mcp-server-stdio) 📂 🏃 - The Descope Model Context Protocol (MCP) server provides an interface to interact with Descope's Management APIs, enabling the search and retrieval of project-related information.
- [thesimsguy/graphlit-mcp-server](https://github.com/thesimsguy/graphlit-mcp-server) 🛠️ 🔄 - The Model Context Protocol (MCP) Server enables integration between MCP clients and the Graphlit service.
- [kxkaloo/mcp](https://github.com/kxkaloo/mcp) 📊 🛠️ - A Model Context Protocol server for Scrapezy that enables AI models to extract structured data from websites.

### 🛠️ <a name="developer-tools"></a>Developer Tools

Tools and integrations that enhance the development workflow and environment management.

- [andyciggy/inkdropapp-mcp-server](https://github.com/andyciggy/inkdropapp-mcp-server) 👨‍💻 📂 - A Model Context Protocol server for the Inkdrop Local HTTP Server API.
- [kxkaloo/solana-mcp-server](https://github.com/kxkaloo/solana-mcp-server) 📊 🛠️ - We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
- [kxkaloo/solana-mcp](https://github.com/kxkaloo/solana-mcp) 📊 🛠️ - A Model Context Protocol (MCP) server that provides onchain tools for Claude AI, allowing it to interact with the Solana blockchain through a standardized interface. This implementation is based on the Solana Agent Kit and enables AI agents to perform blockchain operations seamlessly.
- [thesimsguy/mcp-hydrolix](https://github.com/thesimsguy/mcp-hydrolix) 🛠️ 🔄 - An MCP server for Hydrolix.

### 🧮 <a name="data-science-tools"></a>Data Science Tools

Integrations and tools designed to simplify data exploration, analysis and enhance data science workflows.

- [andyciggy/heroku-mcp-server](https://github.com/andyciggy/heroku-mcp-server) 📊 🧮 - The Heroku Platform MCP Server is a specialized Model Context Protocol (MCP) implementation designed to facilitate seamless interaction between large language models (LLMs) and the Heroku Platform.
- [kxkaloo/mcp-server-circleci](https://github.com/kxkaloo/mcp-server-circleci) 📂 👨‍💻 - Model Context Protocol (MCP) is a new, standardized protocol for managing context between large language models (LLMs) and external systems. In this repository, we provide an MCP Server for CircleCI.
- [thesimsguy/mcp-taskmanager](https://github.com/thesimsguy/mcp-taskmanager) 📂 💬 - Model Context Protocol server for Task Management. This allows Claude Desktop (or any MCP client) to manage and execute tasks in a queue-based system.
- [thesimsguy/mcp-explorium](https://github.com/thesimsguy/mcp-explorium) 🛠️ 🔄 - The Explorium MCP Server is a Model Context Protocol server used to interact with the Explorium API. It enables AI assistants to access Explorium's business and prospect data lookup capabilities.

### 📟 <a name="embedded-system"></a>Embedded system

Provides access to documentation and shortcuts for working on embedded devices.

- [thesimsguy/JSON-resume-mcp](https://github.com/thesimsguy/JSON-resume-mcp) 🔄 🎯 - This is a Model Context Protocol (MCP) server that enhances AI assistants with the ability to update your JSON Resume by analyzing your coding projects.
- [thesimsguy/local-api-mcp-typescript](https://github.com/thesimsguy/local-api-mcp-typescript) 📂 💬 - A Model Context Protocol server that AdsPower browser LocalAPI. This server enables LLMs to interact with start browser, create browser, update browser fingerprint config.
- [kxkaloo/mcp-tinybird](https://github.com/kxkaloo/mcp-tinybird) 📊 🎯 - An MCP server to interact with a Tinybird Workspace from any MCP client.
- [thesimsguy/xero-mcp-server](https://github.com/thesimsguy/xero-mcp-server) 🧠 🗄️ - This is a Model Context Protocol (MCP) server implementation for Xero. It provides a bridge between the MCP protocol and Xero's API, allowing for standardized access to Xero's accounting and business features.
- [thesimsguy/ScreenshotOne-mcp](https://github.com/thesimsguy/ScreenshotOne-mcp) 🧠 📂 - An official implementation of an MCP (Model Context Protocol) server for ScreenshotOne.

### 📂 <a name="file-systems"></a>File Systems

Provides direct access to local file systems with configurable permissions. Enables AI models to read, write, and manage files within specified directories.

- [mikeysrecipes/mcp-notes](https://github.com/mikeysrecipes/mcp-notes) 🔗 🧠 - A personal knowledge management system built on the Model Context Protocol (MCP) that transforms daily notes into organized, searchable knowledge.
- [andyciggy/playwright-mcp](https://github.com/andyciggy/playwright-mcp) 🌎 🗄️ - This project leverages Playwright for automated browser testing and integrates with Cloudflare Workers, Browser Rendering and @cloudflare/playwright for deployment.
- [andyciggy/xero-mcp-server](https://github.com/andyciggy/xero-mcp-server) 🧠 🗄️ - This is a Model Context Protocol (MCP) server implementation for Xero. It provides a bridge between the MCP protocol and Xero's API, allowing for standardized access to Xero's accounting and business features.
- [kxkaloo/geekbot-mcp](https://github.com/kxkaloo/geekbot-mcp) 📂 👨‍💻 - Geekbot MCP (Model Context Protocol) server acts as a bridge, connecting LLM client applications (like Claude) directly to your Geekbot workspace. This allows you to interact with your standups, reports, and team members seamlessly within your conversations using natural language.

### 💰 <a name="finance--fintech"></a>Finance & Fintech

Financial data access and analysis tools. Enables AI models to work with market data, trading platforms, and financial information.

- [andyciggy/needle-mcp](https://github.com/andyciggy/needle-mcp) ☁️ 🎮 - MCP (Model Context Protocol) server to manage documents and perform searches using Needle through Claude’s Desktop Application.
- [kxkaloo/needle-mcp](https://github.com/kxkaloo/needle-mcp) ☁️ 🎮 - MCP (Model Context Protocol) server to manage documents and perform searches using Needle through Claude’s Desktop Application.
- [thesimsguy/brightdata-mcp](https://github.com/thesimsguy/brightdata-mcp) 🎯 🔗 - Welcome to the official Bright Data Model Context Protocol (MCP) server, enabling LLMs, agents and apps to access, discover and extract web data in real-time.
- [kxkaloo/MCP_Atom_of_Thoughts](https://github.com/kxkaloo/MCP_Atom_of_Thoughts) 🎯 👨‍💻 - A Model Context Protocol (MCP) server implementation of Atom of Thoughts, a decomposition-based reasoning framework.
- [kxkaloo/mailpace-mcp](https://github.com/kxkaloo/mailpace-mcp) 💰 👨‍💻 - MailPace MCP (Model Context Protocol) Server is an MCP server implementation that allows sending emails over MailPace's fast transactional email API.

### 🎮 <a name="gaming"></a>Gaming

Integration with gaming related data, game engines, and services

- [kxkaloo/webflow-mcp-server](https://github.com/kxkaloo/webflow-mcp-server) 🎮 🛠️ - A Node.js server implementing Model Context Protocol (MCP) for Webflow using the Webflow JavaScript SDK. Enable AI agents to interact with Webflow APIs. Learn more about Webflow's Data API in the developer documentation.
- [kxkaloo/mcp-server-starrocks](https://github.com/kxkaloo/mcp-server-starrocks) 🎮 🎯 - The StarRocks MCP Server acts as a bridge between AI assistants and StarRocks databases. It allows for direct SQL execution, database exploration, data visualization via charts, and retrieving detailed schema/data overviews without requiring complex client-side setup.
- [thesimsguy/mcp-server-singlestore](https://github.com/thesimsguy/mcp-server-singlestore) 🎮 🧠 - Model Context Protocol (MCP) is a standardized protocol designed to manage context between large language models (LLMs) and external systems. This repository provides an installer and an MCP Server for Singlestore, enabling seamless integration.

### 🧠 <a name="knowledge--memory"></a>Knowledge & Memory

Persistent memory storage using knowledge graph structures. Enables AI models to maintain and query structured information across sessions.

- [mikeysrecipes/chronulus-mcp](https://github.com/mikeysrecipes/chronulus-mcp) 🧮 🔒 - Chat with Chronulus AI Forecasting & Prediction Agents in Claude
- [andyciggy/local-api-mcp-typescript](https://github.com/andyciggy/local-api-mcp-typescript) 🗺️ 🛠️ - A Model Context Protocol server that AdsPower browser LocalAPI. This server enables LLMs to interact with start browser, create browser, update browser fingerprint config.
- [kxkaloo/chaingpt-mcp](https://github.com/kxkaloo/chaingpt-mcp) 📂 🔗 - A Model Context Protocol (MCP) server that allows you to bring ChainGPT capabilities into your AI Agent.

### 🗺️ <a name="location-services"></a>Location Services

Location-based services and mapping tools. Enables AI models to work with geographic data, weather information, and location-based analytics.

- [kxkaloo/inkdrop-mcp-server](https://github.com/kxkaloo/inkdrop-mcp-server) 📂 🔗 - A Model Context Protocol server for the Inkdrop Local HTTP Server API.
- [kxkaloo/playwright-mcp](https://github.com/kxkaloo/playwright-mcp) 📂 🛠️ - This project leverages Playwright for automated browser testing and integrates with Cloudflare Workers, Browser Rendering and @cloudflare/playwright for deployment.
- [kxkaloo/plane-mcp-server](https://github.com/kxkaloo/plane-mcp-server) 🔄 🛠️ - The Plane MCP Server brings the power of Model Context Protocol (MCP) to Plane, allowing AI agents and developer tools to interact programmatically with your Plane workspace.

### 🎯 <a name="marketing"></a>Marketing

Tools for creating and editing marketing content, working with web meta data, product positioning, and editing guides.

- [thesimsguy/dbt-mcp](https://github.com/thesimsguy/dbt-mcp) 💰 🎨 - This MCP (Model Context Protocol) server provides tools to interact with dbt.
- [thesimsguy/ffmpeg-mcp](https://github.com/thesimsguy/ffmpeg-mcp) 🎯 📂 - Using ffmpeg command line to achieve an mcp server, can be very convenient, through the dialogue to achieve the local video search, tailoring, stitching, playback and other functions.
- [thesimsguy/hackle-mcp](https://github.com/thesimsguy/hackle-mcp) 📂 🛠️ - A Model Context Protocol server for Hackle API providing tools and resources for querying A/B Test data.
- [kxkaloo/mcp-server-elasticsearch](https://github.com/kxkaloo/mcp-server-elasticsearch) 🎨 🔗 - This repository contains experimental features intended for research and evaluation and are not production-ready. Connect to your Elasticsearch data directly from any MCP Client (like Claude Desktop) using the Model Context Protocol (MCP).
- [thesimsguy/mcp-server-rag-web-browser](https://github.com/thesimsguy/mcp-server-rag-web-browser) 📂 🎯 - Implementation of an MCP server for the RAG Web Browser Actor. This Actor serves as a web browser for large language models (LLMs) and RAG pipelines, similar to a web search in ChatGPT.

### 📊 <a name="monitoring"></a>Monitoring

Access and analyze application monitoring data. Enables AI models to review error reports and performance metrics.

- [mikeysrecipes/tidal-mcp](https://github.com/mikeysrecipes/tidal-mcp) 🔄 🧠 - Most music platforms offer recommendations — Daily Discovery, Top Artists, New Arrivals, etc. — but even with the state-of-the-art system, they often feel too "aggregated". I wanted something more custom and context-aware.
- [kxkaloo/codemcp](https://github.com/kxkaloo/codemcp) 🏃 🗄️ - Make Claude Desktop a pair programming assistant by installing codemcp.  With it, you can directly ask Claude to implement features, fix bugs.
- [kxkaloo/todoist-mcp-server](https://github.com/kxkaloo/todoist-mcp-server) 🧠 🗄️ - A Todoist MCP server written in Python, using the Todoist Python API. I first created the server by using Claude to translate this TypeScript Todoist MCP server to Python. I'm gradually changing and adding functionality to suit my workflow as I experiment with using Claude to help with task management.
- [kxkaloo/revit-mcp](https://github.com/kxkaloo/revit-mcp) 🏃 🔄 - xml.Revit.MCP provides a comprehensive set of tools for integrating with Autodesk Revit through the Model Context Protocol (MCP). This library serves as a bridge between AI assistants and Revit, enabling powerful automation capabilities and programmatic interaction with building models.
- [thesimsguy/revit-mcp](https://github.com/thesimsguy/revit-mcp) 🏃 🔄 - xml.Revit.MCP provides a comprehensive set of tools for integrating with Autodesk Revit through the Model Context Protocol (MCP). This library serves as a bridge between AI assistants and Revit, enabling powerful automation capabilities and programmatic interaction with building models.

### 🎥 <a name="multimedia-process"></a>Multimedia Process

Provides the ability to handle multimedia, such as audio and video editing, playback, format conversion, also includes video filters, enhancements, and so on

- [mikeysrecipes/norman-mcp-server](https://github.com/mikeysrecipes/norman-mcp-server) 🚚 🛠️ - This Model Context Protocol (MCP) server enables AI to interact with the Norman Finance API, allowing access to accounting, invoices, companies, clients, taxes, and more through a standardized protocol.
- [kxkaloo/norman-mcp-server](https://github.com/kxkaloo/norman-mcp-server) 🚚 🛠️ - This Model Context Protocol (MCP) server enables AI to interact with the Norman Finance API, allowing access to accounting, invoices, companies, clients, taxes, and more through a standardized protocol.
- [thesimsguy/firstcycling-mcp](https://github.com/thesimsguy/firstcycling-mcp) ☁️ 👨‍💻 - This is a Model Context Protocol (MCP) server that provides professional cycling data from FirstCycling. It allows you to retrieve comprehensive information about professional cyclists, race results, race details, and historical cycling data.
- [thesimsguy/heroku-mcp-server](https://github.com/thesimsguy/heroku-mcp-server) 🖥️ 🎮 - The Heroku Platform MCP Server is a specialized Model Context Protocol (MCP) implementation designed to facilitate seamless interaction between large language models (LLMs) and the Heroku Platform.
- [kxkaloo/fibery-mcp-server](https://github.com/kxkaloo/fibery-mcp-server) 🌐 🎥 - This MCP (Model Context Protocol) server provides integration between Fibery and any LLM provider supporting the MCP protocol (e.g., Claude for Desktop), allowing you to interact with your Fibery workspace using natural language.

### 🔎 <a name="search"></a>Search & Data Extraction

- [mikeysrecipes/mcp-sequentialthinking-tools](https://github.com/mikeysrecipes/mcp-sequentialthinking-tools) 🧠 📊 - An adaptation of the MCP Sequential Thinking Server designed to guide tool usage in problem-solving. This server helps break down complex problems into manageable steps and provides recommendations for which MCP tools would be most effective at each stage.
- [thesimsguy/mcp-sequentialthinking-tools](https://github.com/thesimsguy/mcp-sequentialthinking-tools) 🧠 📊 - An adaptation of the MCP Sequential Thinking Server designed to guide tool usage in problem-solving. This server helps break down complex problems into manageable steps and provides recommendations for which MCP tools would be most effective at each stage.
- [kxkaloo/codelogic-mcp-server](https://github.com/kxkaloo/codelogic-mcp-server) 🎮 🔄 - An MCP Server to utilize Codelogic's rich software dependency data in your AI programming assistant.
- [kxkaloo/textin-mcp](https://github.com/kxkaloo/textin-mcp) 🌐 🔄 - TextIn MCP Server is a tool for extracting text and performing OCR on documents, including document text recognition, ID recognition, and invoice recognition. It also supports converting documents into Markdown format.
- [kxkaloo/powerdrill-mcp](https://github.com/kxkaloo/powerdrill-mcp) 🌐 🧠 - A Model Context Protocol (MCP) server that provides tools to interact with Powerdrill datasets, authenticated with Powerdrill User ID and Project API Key.
- [thesimsguy/whissle-mcp](https://github.com/thesimsguy/whissle-mcp) ☁️ 👨‍💻 - A Python-based server that provides access to Whissle API endpoints for speech-to-text, diarization, translation, and text summarization.
- [thesimsguy/mcp-server-qdrant](https://github.com/thesimsguy/mcp-server-qdrant) 📂 🔎 - This repository is an example of how to create a MCP server for Qdrant, a vector search engine.

### 🔒 <a name="security"></a>Security

- [andyciggy/magicuidesign-mcp](https://github.com/andyciggy/magicuidesign-mcp) ☁️ 🚆 - Official ModelContextProtocol (MCP) server for Magic UI.
- [thesimsguy/atla-mcp-server](https://github.com/thesimsguy/atla-mcp-server) 🗄️ 🛠️ - An MCP server implementation providing a standardized interface for LLMs to interact with the Atla API for state-of-the-art LLMJ evaluation.
- [kxkaloo/posthog-mcp](https://github.com/kxkaloo/posthog-mcp) 🌐 🛠️ - A Model Context Protocol (MCP) server for interacting with PostHog. Create annotations and manage projects directly through Claude Desktop!
- [thesimsguy/UNS-MCP](https://github.com/thesimsguy/UNS-MCP) ☁️ 👨‍💻 - An MCP server implementation for interacting with the Unstructured API. This server provides tools to list sources and workflows.

### 🌐 <a name="social-media"></a>Social Media

Integration with social media platforms to allow posting, analytics, and interaction management. Enables AI-driven automation for social presence.

- [mikeysrecipes/cli-mcp-server](https://github.com/mikeysrecipes/cli-mcp-server) 📂 🌐 - This MCP server enables secure command-line execution with robust security measures including command whitelisting, path validation, and execution controls. Perfect for providing controlled CLI access to LLM applications while maintaining security.
- [kxkaloo/yingdao_mcp_server](https://github.com/kxkaloo/yingdao_mcp_server) 🌐 🎨 - An RPA low-code platform, an RPA automation product available to everyone, which can free people from repetitive labor.
- [kxkaloo/vectorize-mcp-server](https://github.com/kxkaloo/vectorize-mcp-server) 🌐 🏃 - A Model Context Protocol (MCP) server implementation that integrates with Vectorize for advanced Vector retrieval and text extraction.
- [thesimsguy/weatherxm-pro-mcp](https://github.com/thesimsguy/weatherxm-pro-mcp) ☁️ 👨‍💻 - An MCP server implementation exposing the WeatherXM PRO APIs as MCP tools, allowing clients to access weather station data, observations, and forecasts through the MCP protocol.

### 🏃 <a name="sports"></a>Sports

Tools for accessing sports-related data, results, and statistics.

- [kxkaloo/alibabacloud-observability-mcp-server](https://github.com/kxkaloo/alibabacloud-observability-mcp-server) 🎨 🔗 - Alibaba Cloud Observable MCP service provides a series of tools to access Alibaba Cloud Observable products, including Alibaba Cloud Log Service SLS, Alibaba Cloud Application Real-time Monitoring Service ARMS, Alibaba Cloud Cloud Monitoring, etc.
- [kxkaloo/mcp-server-axiom-js](https://github.com/kxkaloo/mcp-server-axiom-js) 🌐 🎨 - A JavaScript port of the official Axiom MCP server that enables AI agents to query data using Axiom Processing Language (APL).
- [thesimsguy/mcp-server-axiom-js](https://github.com/thesimsguy/mcp-server-axiom-js) 🌐 🏃 - A JavaScript port of the official Axiom MCP server that enables AI agents to query data using Axiom Processing Language (APL).
- [kxkaloo/tidal-mcp](https://github.com/kxkaloo/tidal-mcp) 🔄 🧠 - Most music platforms offer recommendations — Daily Discovery, Top Artists, New Arrivals, etc. — but even with the state-of-the-art system, they often feel too "aggregated". I wanted something more custom and context-aware.
- [thesimsguy/mcp-ts-morph](https://github.com/thesimsguy/mcp-ts-morph) ☁️ 👨‍💻 - The MCP server leverages ts-morph to provide refactoring operations for TypeScript and JavaScript codebases, and works with editor extensions such as Cursor to allow AST-based (Abstract Syntax Tree)-based symbol renaming, file/folder renaming, find references, and more.

### 🎧 <a name="support-and-service-management"></a>Support & Service Management

Tools for managing customer support, IT service management, and helpdesk operations.

- [thesimsguy/armor-crypto-mcp](https://github.com/thesimsguy/armor-crypto-mcp) 🧠 🎧 - A single source for integrating AI Agents with the Crypto ecosystem. Using Armor's MCP you can bring all of crypto into your AI Agent with unified logic and a complete set of tools.
- [thesimsguy/fewsats-mcp](https://github.com/thesimsguy/fewsats-mcp) 🚚 🌐 - This MCP server integrates with Fewsats and allows AI Agents to purchase anything in a secure way.
- [kxkaloo/crypto-sentiment-mcp](https://github.com/kxkaloo/crypto-sentiment-mcp) 🌐 🎨 - An MCP server that delivers cryptocurrency sentiment analysis to AI agents, leveraging Santiment's aggregated social media and news data to track market mood and detect emerging trends.

### 🌎 <a name="translation-services"></a>Translation Services

Translation tools and services to enable AI assistants to translate content between different languages.

- [andyciggy/norman-mcp-server](https://github.com/andyciggy/norman-mcp-server) 🔗 💬 - This Model Context Protocol (MCP) server enables AI to interact with the Norman Finance API, allowing access to accounting, invoices, companies, clients, taxes, and more through a standardized protocol.
- [kxkaloo/argocd-mcp](https://github.com/kxkaloo/argocd-mcp) 🌐 🎨 - An implementation of Model Context Protocol (MCP) server for Argo CD, enabling AI assistants to interact with your Argo CD applications through natural language.
- [thesimsguy/hanzo-mcp](https://github.com/thesimsguy/hanzo-mcp) 📊 🗺️ - This project provides an MCP server that implements Hanzo-like functionality, allowing Claude to directly execute instructions for modifying and improving project files.
- [thesimsguy/mcp-chain-of-draft-server](https://github.com/thesimsguy/mcp-chain-of-draft-server) 🖥️ 💰 - Chain of Draft Server is a powerful AI-driven tool that helps developers make better decisions through systematic, iterative refinement of thoughts and designs.
- [andyciggy/website-generator-mcp-server](https://github.com/andyciggy/website-generator-mcp-server) 🔗 🖥️ - B12's model context protocol server for generating websites with AI.

### 🎧 <a name="text-to-speech"></a>Text-to-Speech

Tools for converting text-to-speech and vice-versa

- [mikeysrecipes/perplexity-advanced-mcp](https://github.com/mikeysrecipes/perplexity-advanced-mcp) 🎥 🧮 - Perplexity Advanced MCP is an advanced integration package that leverages the OpenRouter and Perplexity APIs to provide enhanced query processing capabilities.
- [mikeysrecipes/terraform-cloud-mcp](https://github.com/mikeysrecipes/terraform-cloud-mcp) 🎥 🛠️ - A Model Context Protocol (MCP) server that integrates AI assistants with the Terraform Cloud API, allowing you to manage your infrastructure through natural conversation. Built with Pydantic models and structured around domain-specific modules, this server is compatible with any MCP-supporting platform including Claude, Claude Code CLI, Claude Desktop, Cursor, Copilot Studio, and others.
- [kxkaloo/nodit-mcp-server](https://github.com/kxkaloo/nodit-mcp-server) 🌐 🧮 - A Model Context Protocol (MCP) server that connects AI agents and developers to structured, context-ready blockchain data across multiple networks through Nodit's Web3 infrastructure.
- [thesimsguy/tripo-mcp](https://github.com/thesimsguy/tripo-mcp) 🖥️ 💰 - Tripo MCP provides an interface between AI assistants and Tripo AI via Model Context Protocol (MCP).

### 🚆 <a name="travel-and-transportation"></a>Travel & Transportation

Access to travel and transportation information. Enables querying schedules, routes, and real-time travel data.

- [kxkaloo/lumbretravel-mcp](https://github.com/kxkaloo/lumbretravel-mcp) 📂 🚆 - 
An MCP server that provides access to LumbreTravel API. LumbreTravel is a platform for managing travel programs and activities and this is the MCP server for it. That allows you to use it on Claude Desktop or other MCP clients.
- [kxkaloo/dbt-mcp](https://github.com/kxkaloo/dbt-mcp) 🌐 🚆 - This MCP (Model Context Protocol) server provides tools to interact with dbt.
- [kxkaloo/dart-mcp](https://github.com/kxkaloo/dart-mcp) 🎯 🚆 - This is a financial analysis MCP (Model-assisted Capability Package) utilizing DART API. Using Claude, you can easily analyze and visualize financial data of listed companies.
- [thesimsguy/supabase-mcp-server](https://github.com/thesimsguy/supabase-mcp-server) 🖥️ 💰 - Query MCP is an open-source MCP server that lets your IDE safely run SQL, manage schema changes, call the Supabase Management API, and use Auth Admin SDK — all with built-in safety controls.
- [thesimsguy/UseGrant-mcp-server](https://github.com/thesimsguy/UseGrant-mcp-server) 🖥️ 🌐 - This is a Model Context Protocol (MCP) server for interacting with the UseGrant API. It provides a set of tools for managing providers, clients, tenants, and access tokens through the UseGrant platform.

### 🔄 <a name="version-control"></a>Version Control

Interact with Git repositories and version control platforms. Enables repository management, code analysis, pull request handling, issue tracking, and other version control operations through standardized APIs.

- [andyciggy/hackle-mcp](https://github.com/andyciggy/hackle-mcp) 📟 🚚 - A Model Context Protocol server for Hackle API providing tools and resources for querying A/B Test data.
- [andyciggy/steampipe-mcp](https://github.com/andyciggy/steampipe-mcp) 📊 🧮 - Unlock the power of AI-driven infrastructure analysis with Steampipe! This Model Context Protocol server seamlessly connects AI assistants like Claude to your cloud infrastructure data, enabling natural language exploration and analysis of your entire cloud estate.
- [kxkaloo/random-web3-mcp](https://github.com/kxkaloo/random-web3-mcp) 📂 🛠️ - 
RandomWeb3MCP is a random element generation service based on EVM block hash. The service provides various random element generation tools that can be used in games, finance, testing, and other fields.
- [thesimsguy/sanity-mcp-server](https://github.com/thesimsguy/sanity-mcp-server) 📟 💰 - Sanity MCP Server implements the Model Context Protocol to connect your Sanity projects with AI tools like Claude, Cursor, and VS Code. It enables AI models to understand your content structure and perform operations through natural language instructions.

### 🛠️ <a name="other-tools-and-integrations"></a>Other Tools and Integrations

- [mikeysrecipes/interactive-mcp](https://github.com/mikeysrecipes/interactive-mcp) 🌐 🎯 - A MCP Server implemented in Node.js/TypeScript, facilitating interactive communication between LLMs and users. Note: This server is designed to run locally alongside the MCP client (e.g., Claude Desktop, VS Code), as it needs direct access to the user's operating system to display notifications and command-line prompts.
- [kxkaloo/chronulus-mcp](https://github.com/kxkaloo/chronulus-mcp) 🗄️ 🎯 - Chat with Chronulus AI Forecasting & Prediction Agents in Claude.
- [kxkaloo/mcp_calculate_server](https://github.com/kxkaloo/mcp_calculate_server) 📂 🔗 - A mathematical calculation service based on MCP protocol and SymPy library, providing powerful symbolic computation capabilities.
- [thesimsguy/readwise-mcp](https://github.com/thesimsguy/readwise-mcp) 🏃 🔄 - The Model Context Protocol (MCP) standardizes how applications provide context to Large Language Models (LLMs), ensuring a clean separation between context management and direct LLM interaction.

## Frameworks

> [!NOTE]
> More frameworks, utilities, and other developer tools are available at https://github.com/punkpeye/awesome-mcp-devtools

- [FastMCP](https://github.com/jlowin/fastmcp) 🐍 - A high-level framework for building MCP servers in Python
- [FastMCP](https://github.com/punkpeye/fastmcp) 📇 - A high-level framework for building MCP servers in TypeScript

## Tips and Tricks

### Official prompt to inform LLMs how to use MCP

Want to ask Claude about Model Context Protocol?

Create a Project, then add this file to it:

https://modelcontextprotocol.io/llms-full.txt

Now Claude can answer questions about writing MCP servers and how they work

- https://www.reddit.com/r/ClaudeAI/comments/1h3g01r/want_to_ask_claude_about_model_context_protocol/

## Star History

<a href="https://star-history.com/#punkpeye/awesome-mcp-servers&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date" />
 </picture>
</a>