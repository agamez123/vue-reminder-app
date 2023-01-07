import { ref } from 'vue'

//firebase imports
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password) => {
    isPending.value = true
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not create user')
        }
        isPending.value = false

    } catch(err) {
        console.log(err)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return { signup, error, isPending }
}

export default useSignup