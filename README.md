# Project Title: Book Management System

## Overview
The **Book Management System** is a Java-based web application designed to manage books, genres, and publishers efficiently. It follows the **Model-View-Controller (MVC)** architecture and integrates features such as data persistence, business logic implementation, and HTTP request handling.

## Features
- Manage books, genres, and publishers
- Implements layered architecture (Model, Service, Controller)
- Repository for database access

## Technologies Used
- **Spring Boot**: Backend framework
- **H2 Database**: Embedded database for persistence
- **Maven**: Dependency management
- **PlantUML**: Diagram modeling

## Project Structure
- **Model Layer**: Defines domain entities like `Book`, `Genre`, and `Publisher`
- **Repository Layer**: Interfaces for data persistence (e.g., `BookRepository`)
- **Service Layer**: Business logic implementation (e.g., `BookServiceImpl`)
- **Controller Layer**: Handles HTTP requests (e.g., `BookController`)

## Running the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd book-management-system
   ```
3. Build the project using Maven:
   ```bash
   mvn clean install
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Testing
Run tests using:
```bash
mvn test
```


