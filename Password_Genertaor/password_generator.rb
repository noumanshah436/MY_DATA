def password_generator
  alpha = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'.split(//)
  numeric = '0123456789'
  special_chars = "?/\\ |}{[]!@# $%^&*()_-+=<>,.`~'':;"

  print 'Enter password length: '
  passLen = gets.chomp.to_i

  arr = (0..passLen - 1).map { ('a'..'z').to_a[rand(26)] }.join
  # p arr

  print 'Want to add numeric chars (y/n) : '
  choice = gets.chomp
  if choice == 'y'
    low = (passLen * 0.3).to_i
    high = (passLen * 0.7).to_i
    # puts "#{low} - #{high}"
    a = rand(low..high)
    a.times do
      random_int = rand(0..9).to_s
      arr[rand(0..passLen - 1)] = random_int
    end
  end

  # p arr

  print 'Want to add Special chars (y/n) : '
  choice = gets.chomp
  if choice == 'y'

    low = (passLen * 0.2).to_i
    high = (passLen * 0.3).to_i
    # puts "#{low} - #{high}"
    a = rand(low..high)
    a.times do
      special_chars_length = special_chars.length - 1
      random_special_char = special_chars[rand(0..special_chars_length)]
      arr[rand(0..passLen - 1)] = random_special_char
    end
  end
  arr
end

puts password_generator
