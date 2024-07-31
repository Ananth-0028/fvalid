

export default function validate(value) {
   let error = {};

   
   if (!value.username.trim()) {
       error.username = "Username is required";
   }

   
   if (!value.email.trim()) {
       error.email = "Email is required";
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
       error.email = "Enter a valid email address";
   }


   if (!value.password.trim()) {
       error.password = "Password is required";
   } else if (value.password.length < 8) {
       error.password = "Password must be at least 8 characters long";
   }

   
   if (!value.password1.trim()) {
       error.password1 = "Please confirm your password";
   } else if (value.password1 !== value.password) {
       error.password1 = "Passwords do not match";
   }

   return error;
}
