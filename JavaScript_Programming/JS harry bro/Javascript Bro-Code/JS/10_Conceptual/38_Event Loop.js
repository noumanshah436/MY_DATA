// 1) Javascript runs the code, it pushes it in the call_stack  and execute it.
// 2) If there is asynchronous code comes,
//    it handles it like
//        call_stack ---> Web_API(wait for the completeion) ---> callback_queue --> call_stack (then execute it)

// 3) once the function in  Web_API complete its task, it will be pushed into the callback_queue
// 4) once the whole code is executed, then event_loop takes the enteries of callback_queue one by one and push it in call_stack to execute it.

// http://latentflip.com/loupe

// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

// Execution stack = call_stack
// message_queue = callback_queue
