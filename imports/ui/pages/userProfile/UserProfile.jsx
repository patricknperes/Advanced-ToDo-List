import React from 'react';
import UserProfileStyle from './userProfile.module';
import CardProfile from './CardProfile';
const userIcon = '/assets/icons/do-utilizador.png';




const UserProfile = () => {
    return (
        <UserProfileStyle.UserProfileBackground>
            <UserProfileStyle.UserProfileContainer>

                <CardProfile />

            </UserProfileStyle.UserProfileContainer>
        </UserProfileStyle.UserProfileBackground>
    );
};

export default UserProfile;