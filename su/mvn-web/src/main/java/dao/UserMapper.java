package main.java.dao;

import java.util.List;

import main.java.model.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer useId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer useId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    
    List<User> findList(User record);
}