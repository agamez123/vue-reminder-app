import { ref , watchEffect} from 'vue'

//firebase imports
import { doc, onSnapshot } from '@firebase/firestore'
import { db } from '@/firebase/config'

// const error = ref(null)
// const isPending = ref(null)

const getDocument = (col, id) => {
    const document = ref(null)
    
    //documnent refrence
    let docRef = doc(db, col, id)


    const unsub = onSnapshot(docRef, snap => {
        document.value = snap.data()
    })

    watchEffect(onInvalidate => {
        onInvalidate(() => unsub())
    })


    return { document }
} 

export default getDocument