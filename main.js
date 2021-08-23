var images = [
  "Baba & Amma.jpg",
"Papa.jpeg",
 "Mummy.jpeg" ,
  "Chacha.jpeg",
   "Me.jpeg",
    "Book.jpg"
  ];
var names = [
  "Nirmala Devi, Adikshya Patel, Aviral Patel, BrijKishor Kanaujia",
"Yashpal Singh",
 "Asha Verma",
  "Ashish Singh",
   "Adikshya Patel",
    "Family Book"
  ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
     var updatedName = names[i];
      document.getElementById("family_member_image").src = updatedImage;
       document.getElementById("family_member_name").innerHTML = updatedName;

}
