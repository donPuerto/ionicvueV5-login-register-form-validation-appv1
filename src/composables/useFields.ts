// import { ref } from 'vue';
export const useCustomFields = () => {
  return {
    login,
    register
  }
}
function login () {
    return [
        {
            id: "email",
            name: "email",
            label: "Email",
            required: true,
            input: {
                
                props: {
                    type: "email",
                    placeholder: "joe@bloggs.com"
                },
                
            }
        },
        {
            id: "password",
            name: "password",
            label: "Password",
            required: true,
            input: {
                
                props: {
                    type: "password",
                    placeholder: "**********"
                },
               
            }
        }
    ]
}


function register () {
    return [
        {
            id: "firstName",
            name: "firstName",
            label: "First name",
            required: true,
            input: {
                props: {
                    type: "text",
                    placeholder: "Joe"
                },
               
            }
        },
        {
            id: "lasName",
            name: "lasName",
            label: "Last name",
            input: {
                props: {
                    type: "text",
                    placeholder: "Bloggs"
                },
               
            }
        },
        {
            id: "email",
            name: "email",
            label: "Email",
            required: true,
            input: {
                props: {
                    type: "email",
                    placeholder: "joe@bloggs.com"
                },
               
            }
        },

        {
            id: "password",
            name: "password",
            label: "Password",
            required: true,
            input: {
                props: {
                    type: "password",
                    placeholder: "*********"
                },
               
            }
        },

        {
            id: "confirmPassword",
            name: "confirmPassword",
            label: "Confirm Password",
            required: true,
            input: {
                
                props: {
                    
                    type: "password",
                    placeholder: "*********"
                },
               
            }
        }
    ]

}


