package main.java.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import main.java.dao.UserMapper;
import main.java.model.User;

@Transactional
@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;
	
	public int deleteByPrimaryKey(Integer userId){
		return userMapper.deleteByPrimaryKey(userId);
	};

	public int insert(User record){
    	return userMapper.insert(record);
    };

    public int insertSelective(User record){
    	return userMapper.insertSelective(record);
    };

    public User selectByPrimaryKey(Integer userId){
    	return userMapper.selectByPrimaryKey(userId);
    };

    public int updateByPrimaryKeySelective(User record){
    	return userMapper.updateByPrimaryKeySelective(record);
    };

    public int updateByPrimaryKey(User record){
    	return userMapper.updateByPrimaryKey(record);
    };
}
