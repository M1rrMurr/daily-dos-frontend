import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "@/types/User";
import { fetchUser } from "@/services/authService";



export const useAuthStore = defineStore('authStire', function() {
    const user = ref<User>({ id: '', })
    const isLoading = ref(false)
    const userIsAuthenticated = computed(() => user.value.id)

    const getUser = async function() {
        isLoading.value = true
        try {
            user.value = await fetchUser()

        } catch (error) { console.log(error) } finally { isLoading.value = false }


    }
    return { user, getUser }

})
