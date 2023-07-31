# frozen_string_literal: true

require 'colorize'
require 'date'

module OneHorizontalBarChart
  def processing(file_name)
    high_temp = 0
    low_temp = 0

    File.open(file_name, 'r') do |file|
      file.readlines.drop(1).each do |line|
        line = line.split(',')

        day = Date.strptime(line[0], '%Y-%m-%d').strftime('%d')

        next unless line[1] != '' && line[3] != ''

        high_temp = line[1].to_i
        low_temp = line[3].to_i

        print "#{day} "

        low_temp.times do
          print '+'.blue
        end

        high_temp.times do
          print '+'.red
        end
        print " #{low_temp}C - #{high_temp}C\n"
      end
    end
  end

  def getMonth(num)
    result = ''

    case num
    when 1
      'Jan'
    when 2
      'Feb'
    when 3
      'Mar'
    when 4
      'Apr'
    when 5
      'May'
    when 6
      'Jun'
    when 7
      'Jul'
    when 8
      'Aug'
    when 9
      'Sep'
    when 10
      'Oct'
    when 11
      'Nov'
    when 12
      'Dec'
    else
      'Invalid Month'
    end
  end

  def get_file_name(date_str, folder)
    year, month = date_str.split('/')
    month = getMonth(month.to_i)
    files_name = Dir.entries(folder)
    files_name = files_name.select { |name| name.include? year }
    files_name.select { |name| name.include? month }
  end

  def question_four(folder_name, file_name)
    processing("#{folder_name}/#{file_name}")
  end
end

include OneHorizontalBarChart

date_str = ARGV[1]
folder_name = ARGV[2]

if Dir.exist?(folder_name) == false
  puts 'NO SUCH DIRECTORY'
  return
end

file_name = OneHorizontalBarChart.get_file_name(date_str, folder_name)

OneHorizontalBarChart.question_four(folder_name, file_name[0])

# 2002-6-7    year-month-day
