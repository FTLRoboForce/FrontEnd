import React, { useEffect, useState } from "react";
import { Avatar, Button, Input, Group, Text } from "@mantine/core";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import Api from "../../utilities/api";
import "./Profile.css";

export default function Profile({ userGlobal, setUserGlobal }) {
  const [userPhoto, setUserPhoto] = useState(false);
  const [userAvatarSrc, setUserAvatarSrc] = useState(null); // Set initial value to null
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  useEffect(() => {
    // Set the initial avatar image URL based on userGlobal.photo
    if (userGlobal && userGlobal.photo !== userAvatarSrc) {
      setUserAvatarSrc(userGlobal.photo);
    }
  }, [userGlobal, userAvatarSrc]);

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (userGlobal?.email && newPhotoUrl.trim() !== "") {
      const updatedUser = await Api.uploadPhoto({
        email: userGlobal.email,
        photo: newPhotoUrl.trim(),
      });
      console.log(updatedUser.token);
      localStorage.setItem("jwt", updatedUser.token);
      Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
        setUserGlobal(response);
        console.log(response); 
      });

      if (updatedUser && updatedUser.error) {
        console.error(updatedUser.message);
        // Handle error if needed
      } else if (updatedUser) {
        setUserGlobal((prevUser) => ({
          ...prevUser,
          photo: updatedUser.photo,
        }));
        setUserAvatarSrc(updatedUser.photo); // Update the userAvatarSrc state with the new photo URL
      }
    }

    setUserPhoto(false);
  }

  const handlePhotoChange = (event) => {
    setNewPhotoUrl(event.currentTarget.value);
  };

  return (
    <>
      <ParticleBackground />
      <div className="profile-page">
        <div className="profile-container">
          <div className="background"></div>
          <div className="avatar-container">
            <Avatar
              src={userAvatarSrc || userGlobal?.photo}
              radius="xl"
              alt="User Avatar"
              className="user-photo"
            />
            <Button
              onClick={() => setUserPhoto(!userPhoto)}
              id="profile-button"
              variant="link"
              color="blue"
              className="change-photo-button"
            >
              {userPhoto ? "Cancel" : "Change Photo"}
            </Button>
          </div>
          <section className="info">
            <h1 className="user-name">{`${userGlobal?.firstname} ${userGlobal?.lastname}`}</h1>
            <h2 className="user-email">{userGlobal?.email}</h2>
            {userPhoto && (
              <form className= "photo-form" onSubmit={handleOnSubmit}>
                <Group align="center" className="photo-form">
                  <Input
                    type="text"
                    placeholder="Enter image URL"
                    value={newPhotoUrl}
                    onChange={handlePhotoChange}
                    required
                  />
                  <Button
                    type="submit"
                    id="profile-button"
                    variant="link"
                    color="blue"
                    className="save"
                  >
                    Save
                  </Button>
                </Group>
              </form>
            )}
            <ul className="user-details">
              <li>
                <Text className="user-points" size="sm" weight={500}>
                  Points: {userGlobal?.points}
                </Text>
              </li>
              <li>
                <Text className="user-quiz" size="sm" weight={500}>
                  Total Quiz Taken: {userGlobal?.totalquiz}
                </Text>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
