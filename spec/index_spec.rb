require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome
wait = Selenium::WebDriver::Wait.new(timeout: 5)

begin
  driver.get "http://localhost:4567/"
  driver.find_element(:id, 'welcome')
ensure
  driver.quit
end