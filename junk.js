  const fetchUser = async () => {
    try {
      const {data} = await Axios.get(`https://api.github.com/users/${searchUser}`);
      const details = data;
      setUser(details);
      console.log(details);
      console.log(user);
      Keyboard.dismiss();
      navigation.push('User',{details});
    } catch (error) {
        // console.error(error);
        // console.log(searchUser);
        Keyboard.dismiss();
        navigation.push('UserNotFound',{searchUser});
    }
  }