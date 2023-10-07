
// up to line 11 this is my javascript part and after that i have been worked on my jsx

function formatName(user){
 return user.first_name + '' + user.last_name;
}
const user ={
 first_name :'mannu',
 last_name : 'chaurasiya'

};

// form line 14 to 19 i've been worked on JSX
const element = (
 <h1>
 hello, {formatName(user)}
 </h1>
)

