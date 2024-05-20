const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];
  
  // Function to get the date a certain number of days ago from today
  const getRecentDate = (daysAgo) => {
    const date = new Date();          // Create a new date object representing the current date and time
    date.setDate(date.getDate() - daysAgo);  // Subtract the specified number of days from the current date
    return date;                      // Return the modified date object
  };
  
  const analyzeSocialMediaData = (users) => {
    // Get the ISO string of the date one week ago
    const oneWeekAgo = getRecentDate(7).toISOString();
  
    // Filter active users who have posted at least once in the past week
    const activeUsers = users.filter(user =>
      user.posts.some(post => post.timestamp >= oneWeekAgo)
    );
  
    // Extract popular posts from active users' posts, filtering those with at least 10 likes
    const popularPosts = activeUsers.flatMap(user =>
      user.posts.filter(post => post.timestamp >= oneWeekAgo && post.likes >= 10)
    );
  
    // Calculate the total number of likes from popular posts
    const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
  
    // Calculate the average likes per active user
    const averageLikesPerUser = activeUsers.length ? totalLikes / activeUsers.length : 0;
  
    // Return the result object containing the number of active users, total popular posts, and average likes per user
    return {
      numberOfActiveUsers: activeUsers.length,
      totalPopularPosts: popularPosts.length,
      averageLikesPerUser: averageLikesPerUser
    };
  };
  
  // Call the function and log the result
  const result = analyzeSocialMediaData(users);
  console.log(result);
  