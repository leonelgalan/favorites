class Tweet < ActiveRecord::Base
  attr_accessible :content, :screen_name, :tweet_id  
  
  def self.pull_tweets
  Twitter.favorites("railscasts", since_id: maximum(:tweet_id)).each do |tweet|
    unless exists?(tweet_id: tweet.id)
      create!(
        tweet_id: tweet.id,
        content: tweet.text,
        screen_name: tweet.user.screen_name,
      )
    end
  end
end

	def self.search(search)
  	  if search
    	find(:all, :conditions => ['content LIKE ?', 'screen_name LIKE ?', "%#{search}%"])
 		else
    	find(:all)
  	  end
  end
end


