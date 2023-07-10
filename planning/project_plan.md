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
2. Register
3. Login
4. Create Course
5. Flashcards
6. Quiz
7. Previous Flashcards
8. Previous Quizes
9. Leaderboard
    
## Data Model

User Schema 
[Username](#username "Goto heading-1")
[First Name](#username "Goto heading-1")

- 

## Endpoints

1. "/user/register" -register user
2. "/user/login" -login user and generate JWT
3. "/user/profile" -decode JWT and return body
4. "/quiz/list" -return list of all previous quizes
5. "/quiz/:id" -return individual quiz
6. "/flashcards/list" -return list of all previous flashcardsets
7. "/flaschards/:id" -return specific flashcard set
8. "/user/list" -return list of users points and usernames in accending order of points

   
***Don't forget to set up your Issues, Milestones, and Project Board!***
