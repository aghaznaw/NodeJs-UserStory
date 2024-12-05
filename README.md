# Project Title: PDP 2(Book Management System)

## Overview
The **Book Management System** is a Java-based web application developed as part of the **Advanced Software Engineering Course, PDP 2**. The system is designed to  manage books, genres, and publishers, incorporating the **Model-View-Controller (MVC)** architecture. It integrates key features like data persistence, business logic implementation, and HTTP request handling, providing a solution for managing and organizing books and related entities.

## Technologies Used
- **Spring Boot**: Backend framework
- **MySQL**: Database for persistence
- **Maven**: Dependency management
- **Thymeleaf**: Template engine for rendering views

## Project Structure
- **Model Layer**: Defines domain entities like `Book`, `Genre`, and `Publisher`
- **Repository Layer**: Interfaces for data persistence (e.g., `BookRepository`)
- **Service Layer**: Business logic implementation (e.g., `BookServiceImpl`)
- **Controller Layer**: Handles HTTP requests (e.g., `BookController`)
- **View Layer**: Provides UI templates using **Thymeleaf**

## Report (What we have done so far)
- Set up the **Book Management System** as part of the **Advanced Software Engineering Course, PDP 2**.
- Implemented **Model-View-Controller (MVC)** architecture to separate concerns.
- Designed and created domain models such as **Book**, **Genre**, and **Publisher**.
- Integrated **Spring Boot** for backend development, using **Maven** for dependency management.
- Set up **MySQL Database** for persistence of book, genre, and publisher data.
- Defined business logic in the **Service Layer** and data access logic in the **Repository Layer**.
- Created HTTP endpoints in the **Controller Layer** for managing books and related entities.
- Developed **UI** using **Thymeleaf** for t book management.
- Designed and executed unit tests for all services and controller endpoints.


## Running the Application
1. Clone the repository:
   ```bash
   git clone https://git01lab.cs.univie.ac.at/vu-advanced-software-engineering/students/2024w/ASE_12247016.git
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


