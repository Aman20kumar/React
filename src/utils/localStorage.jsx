const employeesWithTasks = {
  "employees": [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "a@a.com",
      "password": "123",
      "tasks": [
        {
          "task": "Complete monthly financial report",
          "taskDescription": "Compile and analyze financial data for the current month.",
          "taskDate": "2024-10-18",
          "category": "Finance"
        },
        {
          "task": "Prepare budget proposal",
          "taskDescription": "Create a detailed budget plan for the upcoming quarter.",
          "taskDate": "2024-10-20",
          "category": "Finance"
        },
        {
          "task": "Prepare budget proposal",
          "taskDescription": "Create a detailed budget plan for the upcoming quarter.",
          "taskDate": "2024-10-20",
          "category": "Finance"
        }
        
      ],
      "taskCounts": {
        "active": 4,
        "newTask": 1,
        "completed": 12,
        "failed": 1
      }
    },
    {
      "id": 2,
      "firstName": "Isha",
      "email": "i@i.com",
      "password": "123",
      "tasks": [
        {
          "task": "Review website performance metrics",
          "taskDescription": "Analyze website traffic, bounce rates, and conversion rates.",
          "taskDate": "2024-10-20",
          "category": "Marketing"
        },
        {
          "task": "Create social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        },
        
      ],
      "taskCounts": {
        "active": 3,
        "newTask": 3,
        "completed": 14,
        "failed": 0
      }
    },
    {
    "id": 3,
      "firstName": "karan",
      "email": "k@k.com",
      "password": "123",
      "tasks": [
        {
          "task": "Review website performance metrics",
          "taskDescription": "Analyze website traffic, bounce rates, and conversion rates.",
          "taskDate": "2024-10-20",
          "category": "Marketing"
        },
        {
          "task": "review social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        },
        {
          "task": "Create social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        },
        {
          "task": "Create social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        }
        
      ],
      "taskCounts": {
        "active": 4,
        "newTask": 3,
        "completed": 14,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstName": "Deepak",
      "email": "d@d.com",
      "password": "123",
      "tasks": [
        {
          "task": "Review website performance metrics",
          "taskDescription": "Analyze website traffic, bounce rates, and conversion rates.",
          "taskDate": "2024-10-20",
          "category": "Marketing"
        },
        {
          "task": "Create social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        },
        {
          "task": "Create social media content calendar",
          "taskDescription": "Plan and schedule social media posts for the next month.",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        }
        // Add more tasks for Isha...
      ],
      "taskCounts": {
        "active": 4,
        "newTask": 3,
        "completed": 14,
        "failed": 0
      }
    }
    
    // Repeat for other employees...
  ],
};



  
  const admin =[{
      "id": 101,
      "firstName": "Aman",
      "email": "admin@example.com",
      "password": "123"
    }
];
  

export const setLocalstorage = () => {
   localStorage.setItem('employeesWithTasks', JSON.stringify(employeesWithTasks)) 
   localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalstorage = () => {
    localStorage.getItem('employeesWithTasks')
    localStorage.getItem('admin')

  return{employeesWithTasks, admin}    
}