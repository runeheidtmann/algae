# algae dev

# install

## Backend
    1. clone project
        - cd into project
    2. create environment.
        - "python -m venv .venv"
    3. activate environment
        - ". .venv/Scripts/activate"
    4. install dependencies:
        -"pip install -r requirements.txt"
    5. Make django db and migrations:
        1. "python manage.py makemigrations"
        2. "Python manage.py migrate"
    6. Make a user for first login:
        -"python manage.py createsuperuser"

    7. run server:
        - "python manage.py runserver"


## Frontend
    0. install nodejs
    1. cd into project
    2. "npm install"
    3. "npm run dev"

