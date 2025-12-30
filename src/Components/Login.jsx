





// import { useState } from "react";






// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(isSignup ? "Signup Submitted" : "Login Submitted");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isSignup ? "Create Account" : "Login"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isSignup && (
//             <input
//               type="text"
//               placeholder="full Name"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

            
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//                       <input
//               type="text"
//               placeholder="user Name"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="number"
//               placeholder="contact No"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="address"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             {isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           {isSignup ? "Already have an account?" : "Don't have an account?"}
//           <button
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-blue-500 ml-1 hover:underline"
//           >
//             {isSignup ? "Login" : "Sign Up"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
