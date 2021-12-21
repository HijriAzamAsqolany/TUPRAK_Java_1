function showChat() {
    var isiChat = document.getElementById("message").value; 
    var node = document.createElement("div");                 // Create a <li> node
    var textnode = document.createTextNode(isiChat);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("rsChat").appendChild(node);     // Append <li> to <ul> with id="myList"
}  






















