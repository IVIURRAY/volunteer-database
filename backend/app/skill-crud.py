from datetime import datetime
from typing import List, Optional
from sqlalchemy.orm import Session
from . import models, schemas


def get_skill_by_id(db: Session, skill_id: int) -> models.User:
    """Return the first user that has the matching id."""
    return db.query(models.Skill).filter(models.User.skill_id == skill_id).first()


def get_skill_by_name(db: Session, user_email: str) -> models.User:
    """Return the first user that has the matching email."""
    return db.query(models.User).filter(models.User.user_email == user_email).first()


def get_skills(db: Session, skip: int = 0, limit: int = 100) -> List[models.User]:
    """Return all users, making use of batching.

    Args:
        skip: offset from the start (default 0)
        limit: how many to retrieve (default 100)

    Returns:
        List of users
    """
    return db.query(models.User).offset(skip).limit(limit).all()


def create_skills(db: Session, user: schemas.UserCreate):
    """Create a new user."""
    password = user.password
    hashedpass = hash_password(password)
    db_user = models.User(
        user_email=user.user_email,
        user_first=user.user_first,
        user_last=user.user_last,
        username=user.username,
        user_hashed_password=hashedpass,
        is_active=user.is_active,
        is_verified=user.is_verified,
        user_skill=user.user_skill,
        user_description=user.user_description,
        user_location=user.user_location,
        user_last_login=datetime.now()
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def check_skills(db: Session, name: str, password: str) -> Optional[models.User]:
    """Check if the name and password match what's in the database.

    Args:
        db: database connection
        name: name of the user to check
        password: password to check against

    Returns:
        User if the password matches, otherwise None
    """
    from_db = get_user_by_name(db, name)
    if not from_db:
        return None
    if verify_password(from_db.user_hashed_password, password):
        return from_db
    return None
