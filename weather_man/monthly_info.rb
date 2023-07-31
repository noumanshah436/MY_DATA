# frozen_string_literal: true

module MonthlyInfo
  def processing(file_name)
    sum_high_temp = sum_low_temp = sum_most_humid = 0

    cnt_high_temp_enteries =  cnt_low_temp_enteries = cnt_most_humid_enteries = 0

    File.open(file_name, 'r') do |file|
      file.readlines.drop(1).each do |line|
        line = line.split(',')
        if line[1] != ''
          sum_high_temp += line[1].to_i
          cnt_high_temp_enteries += 1
        end

        if line[3] != ''
          sum_low_temp += line[3].to_i
          cnt_low_temp_enteries += 1
        end

        if line[7] != ''
          sum_most_humid = line[7].to_i
          cnt_most_humid_enteries += 1
        end
      end
    end

    # store current month data in hash
    puts "Highest Average: #{sum_high_temp / cnt_high_temp_enteries}C "
    puts "Lowest Average: #{sum_low_temp / cnt_low_temp_enteries}C  "
    puts "Average Humidity: #{sum_most_humid / cnt_most_humid_enteries}%  "
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

  def question_two(folder_name, file_name)
    processing("#{folder_name}/#{file_name}")
  end
end

include MonthlyInfo

date_str = ARGV[1]
folder_name = ARGV[2]

if Dir.exist?(folder_name) == false
  puts 'NO SUCH DIRECTORY'
  return
end

file_name = MonthlyInfo.get_file_name(date_str, folder_name)
# if file_name.empty?
#    return "NO DATA"
# end

MonthlyInfo.question_two(folder_name, file_name[0])

# 2002-6-7    year-month-day
