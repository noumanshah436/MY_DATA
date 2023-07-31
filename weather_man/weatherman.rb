# frozen_string_literal: true

if ARGV.length == 3 && ARGV[0] == '-e'
  require_relative 'yearly_weather_info'
elsif ARGV.length == 3 && ARGV[0] == '-a'
  require_relative 'monthly_info'
elsif ARGV.length == 3 && ARGV[0] == '-c'
  require_relative 'two_horizontal_bar_chart'
elsif ARGV.length == 3 && ARGV[0] == '-b'
  require_relative 'one_horizontal_bar_chart'
else
  puts 'You are not a student and not smart'
end

# if ARGV.length != 2
#   p 'Give year and path to folder'
#   return
# end
