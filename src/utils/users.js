const users = []

const addUser = ({ id, username, room }) => {

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room are required.'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error:'Username is in use!'
        }
    }
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
 
const getUser = (id) => {
    const retrievedUser = users.find((user)=>user.id===id)
    return retrievedUser
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    const retrievedUser = users.filter((user) => user.room === room)
    return retrievedUser
}

addUser({
    id: 22,
    username: 'Andrew  ',
    room: 'South Philly'
})
addUser({
    id: 28,
    username: 'Jack',
    room: 'South East'
})
addUser({
    id: 32,
    username: 'Jackson  ',
    room: 'South Philly'
})
const user = getUser(22)
const roomForUser = getUserInRoom('south east')
console.log('Room for user', roomForUser)
console.log(users)
console.log('User',user)
const removedUser = removeUser(22)

console.log(removedUser)
module.exports = {
    getUser,
    addUser,
    getUserInRoom,
    removeUser
}