function addroom()
{
    document.getElementById("chat-room-block").style.display = 'inline';
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);

    //window.location="kwitter_room.html";
}