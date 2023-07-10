# Project Plan

Pod Members: **Khalid Abouelrous, Oyindamola Akanbi, Wissam Hassani**

## Problem Statement and Description

The challenge presented by current study websites lies in the static nature of traditional study materials, as they often lack the ability to adapt to individual learning needs and offer repetitive content. Hence, there is a need for an innovative solution that can create diverse and engaging study resources, ensuring students can effectively retain knowledge by continuously presenting them with new and unique questions and flashcards tailored to their specific learning objectives.

## User Roles and Personas

Sarah the Student:

Background: Sarah is a high school student passionate about STEM subjects, particularly physics and mathematics. She wants to excel in her exams and prepare for college admissions. Goals: Sarah wants a website that provides her with a wide range of AI-generated questions and answers to practice and improve her understanding of complex STEM concepts.

Professor Mark the Teacher:

Background: Professor Mark is a university professor in the computer science department. He wants to engage his students by incorporating AI-generated questions and answers into his coursework. Goals: Mark is looking for a website that offers a reliable platform to access AI-generated questions and answers aligned with the curriculum, enabling him to provide his students with valuable practice material.

## User Stories

1. As a student in college, I want to study more effectively, so that I can get better grades.
2. As a student, I want to track my points verses my friends, so that I can see who is working harder.
3. As a learner, I want to see courses/flashcards that were previously created, so that I can expand my knowledge.
4. As a learner, I want to see what questions I get wrong, so that I can work on my weak spots.
5. As a learner, I want to see explanations of questions I get wrong, so that I can correct myself later on.
6. As a student preparing for exams in STEM fields, I want to use a website that generates questions and answers using AI, so that I can practice and improve my knowledge in subjects like physics, chemistry, and mathematics.
7. As a teacher in a STEM field, I want to utilize a website that creates AI-generated questions and answers, so that I can provide my students with additional practice material that aligns with the curriculum and helps them reinforce their understanding of key concepts.
8. As a researcher in a STEM discipline, I want to explore a website that uses AI to generate questions and answers, as it can assist me in conducting preliminary investigations, refining my research questions, and identifying potential knowledge gaps in my area of study.
9. As a professional working in a STEM-related industry, I want to have access to a website that generates AI-based questions and answers, so that I can stay updated on the latest advancements and challenges in my field and enhance my problem-solving skills.
10. As a lifelong learner with an interest in STEM subjects, I desire to engage with a website that offers AI-generated questions and answers, allowing me to explore various areas of science, technology, engineering, and mathematics at my own pace, broaden my knowledge, and satisfy my curiosity.

## Pages/Screens

1. Landing Page

<img width="800" alt="Screenshot 2023-07-10 at 1 56 06 PM" src="https://github.com/FTLRoboForce/RoboForce/assets/112723822/279a6bb1-893a-422f-87a8-5bbf7e97a07c"><br>
2. Register

<img width="800" alt="Screenshot 2023-07-10 at 2 08 39 PM" src="https://github.com/FTLRoboForce/RoboForce/assets/112723822/d6d71150-34b5-4ea5-9143-bac28c874449"><br>
3. Login

<img width="800" alt="Screenshot 2023-07-10 at 2 08 50 PM" src="https://github.com/FTLRoboForce/RoboForce/assets/112723822/ef00f74a-6cb0-473f-b189-118dd998f87f"><br>
4. Create Course

<img width="800" alt="Screenshot 2023-07-10 at 2 09 04 PM" src="https://github.com/FTLRoboForce/RoboForce/assets/112723822/bd384e3c-8f29-4a0a-bb0a-cd4bfd4f3ac3"><br>

5. Flashcards
6. Quiz
7. Previous Flashcards
8. Previous Quizes
9. Leaderboard

## Figma Video
https://www.loom.com/share/1db84ed1e04b42889be6d0a6060b3838?sid=02d96faa-0561-43bb-9fbd-2b771a238775
    
## Data Model
**User Schema**  
| Column Name  | Type     | Description                                      |
|--------------|----------|--------------------------------------------------|
| user_id      | int      | Primary key                                      |
| username     | varchar  | user username                                    |
| firstName    | Varchar  | user's first name                                |
| lastName     | Varchar  | user's last name                                 |
| email        | Varchar  | user's email (unique)                            |
| hashpassword | Integer  | user hashed password                             |
| points       | int      | total of points user has (leaderboard purposes)  |
- 
**Course schema**
| Column Name  | Type    | Description                           |
|--------------|---------|---------------------------------------|
| course_id    | int     | Primary key                           |
| user_id      | varchar | FOREIGN KEY -> References (user (id)) |
| difficulty   | enum    | easy, meduim , hard                   |


**FlashCard set schema**

| Column Name      | Type | Description                             |
|------------------|------|-----------------------------------------|
| flashcard_set_id | int  | Primary key                             |
| course_id        | int  | FOREIGN KEY -> References (course (id)) |

**Individual FlashCard set schema**

| Column Name      | Type    | Description                                   |
|------------------|---------|-----------------------------------------------|
| flashcard_id     | int     | Primary key                                   |
| flashcard_set_id | varchar | FOREIGN KEY -> References (Flashcard set(id)) |
| question         | Varchar | question front of the card                    |
| answer           | Varchar | answer back of the card                       |

**Quiz schema**

| Column Name  | Type | Description                             |
|--------------|------|-----------------------------------------|
| quiz_id      | int  | Primary key                             |
| course_id    | int  | FOREIGN KEY -> References (course (id)) |


**Quiz Questions Schema**

| Column Name  | Type                   | Description                        |
|--------------|------------------------|------------------------------------|
| ID           | int                    | Primary key                        |
| Quiz ID      | int NOT NULL           | FOREIGN KEY -> References Quiz(id) |
| Question     | Varchar                | Question generated by AI           |
| choice       | Varchar                | Multiple choice for the questions  |
| Answer       | Varchar                | Answer of the questions            |
| Points       | Integer                | Points depending on difficulty     |
| isCorrect    | Boolean(True or false) | If the user answered correctly     |



## Endpoints
| CRUD   | HTTP Verb | Endpoint          | Description                                                            | User Stories |
|--------|-----------|-------------------|------------------------------------------------------------------------|--------------|
| CREATE | POST      | /user/register    | Create new user account                                                |              |
| READ   | POST      | /user/login       | login user and generate JWT                                            |              |
| READ   | GET       | /user/profile"    | Decoded JWT and return body                                            |              |
|        | POST      |                   | Post questions generated by AI into DB                                 |              |
| Update | POST      |                   | Post points of user per questions ans                                  |              |
| READ   | GET       | /quiz/list        | Return list of all previous quizes                                     |              |
| READ   | GET       | /quiz/:id"        | Return Individual quiz                                                 |              |
| READ   | GET       | /flashcards/list" | Return list of all previous flashcard                                  |              |
| READ   | GET       | /flaschards/:id"  | Returns specific flashcard set                                         |              |
| READ   | GET       | /user/list"       | Return list of users points and username in accending orders of points |          2   |

   
***Don't forget to set up your Issues, Milestones, and Project Board!***
