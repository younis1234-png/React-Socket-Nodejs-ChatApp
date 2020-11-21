// users is gonna be a  emthy Array at the begining
const users = [];

const addUser = ({ id, name, room }) => {
  // change name the user entry
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // this is going to check in the const = users =[]; array to see if the new user will sing in int
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is taken" };
  }

  // to create a new room name
  const user = { id, name, room };
  // now we gonna put our new user room name to a ARRAY AT THE TOP
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  // try to find our user with the specific id
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    // if the index is not equal to -1 or nothing than remove it or make it an emty array
    return users.splice(index, 1)[0];
  }
};

//we need to see if there is a user
const getUser = () => users.find((user) => users.id === id);

// to get all the users in the room and join them
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
