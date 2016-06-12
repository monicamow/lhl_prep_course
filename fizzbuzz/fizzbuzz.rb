=begin
Write a program that prints the numbers from 1 to 100. 
For the multiples of 3, print "Fizz" instead of the number and 
for the multiples of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5 print "FizzBuzz"
=end

one_to_one_hunnid = (1..100).to_a

one_to_one_hunnid.each do |number|

  if number % 3 == 0 && number % 5 == 0
    puts "FiZzBuZz"
    
  elsif number % 5 == 0 
    puts "BuZz"
  
  elsif number % 3 == 0 
    puts "FiZz"
    
  else
    puts number
  end

end


