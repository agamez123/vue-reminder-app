import { ref, watchEffect } from 'vue'

//firebase imports
import { db } from '@/firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getCollection = (col, q) => {
    const documents = ref(null)
    
    //collection refrence
    let colRef = collection(db, col)

    if (q) {
        colRef = query(colRef, where(...q))
    }

    const unsub = onSnapshot(colRef, snap => {
        let results = []
        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = results
    })

    watchEffect(onInvalidate => {
        onInvalidate(() => unsub())
    })


    return { documents }
} 


export default getCollection