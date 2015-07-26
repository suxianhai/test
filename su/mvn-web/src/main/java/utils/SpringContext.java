package main.java.utils;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * 功能描述：获取spring容器，以访问容器中定义的其他bean
 * 
 */
public class SpringContext implements ApplicationContextAware {

	// Spring应用上下文
	private static ApplicationContext applicationContext;

	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		SpringContext.applicationContext = applicationContext;
	}

	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	/**
	 * 描述: 传入bean的名称得到bean
	 *
	 */
	public static Object getBean(String beanName) throws BeansException {
		return applicationContext.getBean(beanName);
	}
}
