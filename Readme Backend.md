# Feel-Backend

This is the backend repository for the Feel application. It provides the necessary functionality to manage users and emotional records.

## Table `users`

The `users` table stores the information of registered users in the application. Below is the table structure:

| Column             | Type         | Description             |
|------------------  |----------    |-------------------------|
| name               | varchar      | User's name             |
| age                | integer      | User's age              |
| genre              | varchar      | User's gender           |
| email              | varchar      | User's email            |
| password           | varchar      | User's password         |
| professional_email | varchar      | Professional's email    |
| reminder_day       | integer      | Reminder day            |
| reminder_hour      | time         | Reminder hour           |
| reminder_send      | date         | Reminder send date      |
| record             | reference    | Records of User         |



## Table `records`

The `records` table stores the emotional records made by the users. Below is the table structure:

| Column         | Type         | Description               |
|----------------|--------------|---------------------------|
| detail         | varchar      | Record Details            |
| date           | varchar      | Record Date Creation      |
| emotion        | reference    | Emotions of record        |
| cause          | reference    | Causes of record          |
| symptom        | reference    | Symptons of record        |

## Table `emotions`

The `emotions` table stores the emotional posibilities for records. Below is the table structure:

| Column         | Type    | Description               |
|----------------|---------|---------------------------|
| name           | varchar | Experienced emotion       |

## Table `causes`

The `causes` table stores the Causes posibilities for records. Below is the table structure:

| Column         | Type    | Description               |
|----------------|---------|---------------------------|
| name           | varchar | Causes of Emotion         |

## Table `symptoms`

The `symptoms` table stores the Symptoms posibilities for records. Below is the table structure:

| Column         | Type    | Description               |
|----------------|---------|---------------------------|
| name           | varchar | Symptoms Emotion          |

## Table `strategies`

The `strategies` table stores the Strategy posibilities for records. Below is the table structure:

| Column         | Type    | Description               |
|----------------|---------|---------------------------|
| name           | varchar | Strategies                |


This README provides a basic description of the `users`, `records`, `emotions`, `causes`, `symptoms` and `strategies` table structures used in the Feel application backend.


// Steps:

## Models
 - User - Ok
 - Record - Ok
 - Emotion - Ok // Test
 - Cause - Ok // Test
 - Symptom- Ok // Test
 - Strategy - Ok // Test

// Definition of EndPoints

// Auth User - Ok
// Middleware for Auth - 

// Users
- Create User - Ok
- Load User - Ok
- Load User - Records: 
- Update User

// Records
- Create Record - Ok
- Update Record
- Delete Record
- Load Records

- Load Cuantity of Records from a Day
- Load % of 3 most used Emotions from Total Records
- Load % of 3 most used Causes from Total Records
- Load % of 3 most used Strategies from Total Records

// Emotions
- Load Emotions

// Causes
- Create Cause
- Delete Cause
- Load Causes

// Strategies
- Create Strategy
- Delete Strategy
- Load Strategys

// Symptoms
- Create Symptom
- Delete Symptom
- Load Symptoms


