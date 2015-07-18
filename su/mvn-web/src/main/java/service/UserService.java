package main.java.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.java.dao.UserMapper;
import main.java.model.User;

@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;
	
	public int deleteByPrimaryKey(Integer useId){
		return userMapper.deleteByPrimaryKey(useId);
	};

	public int insert(User record){
    	return userMapper.insert(record);
    };

    public int insertSelective(User record){
    	return userMapper.insertSelective(record);
    };

    public User selectByPrimaryKey(Integer useId){
    	return userMapper.selectByPrimaryKey(useId);
    };

    public int updateByPrimaryKeySelective(User record){
    	return userMapper.updateByPrimaryKeySelective(record);
    };

    public int updateByPrimaryKey(User record){
    	return userMapper.updateByPrimaryKey(record);
    };
}
