# frozen_string_literal: true

require 'date'

module YearlyWeatherInfo
  $high_temp_hash = Hash[]
  $low_temp_hash = Hash[]
  $most_humid_hash = Hash[]

  def processing(fileName)
    high_temp = 0
    low_temp = 100
    most_humid = 0

    high_temp_day = ''
    low_temp_day = ''
    most_humid_day = ''

    File.open(fileName, 'r') do |file|
      file.readlines.drop(1).each do |line|
        line = line.split(',')

        # for high temp
        if line[1] != '' && line[1].to_i > high_temp
          high_temp = line[1].to_i
          high_temp_day = Date.strptime(line[0], '%Y-%m-%d').strftime('%b %d')
        end

        # for low temp
        if line[3] != '' && line[3].to_i < low_temp
          low_temp = line[3].to_i
          low_temp_day = Date.strptime(line[0], '%Y-%m-%d').strftime('%b %d')
        end

        # for most humid day
        if line[7] != '' && line[7].to_i > most_humid
          most_humid = line[7].to_i
          most_humid_day = Date.strptime(line[0], '%Y-%m-%d').strftime('%b %d')
        end
      end
    end

    # store current month data in hash
    $high_temp_hash.store(high_temp_day, high_temp)
    $low_temp_hash.store(low_temp_day, low_temp)
    $most_humid_hash.store(most_humid_day, most_humid)

    # this will show current month data
    # puts "high temp = #{high_temp} on #{high_temp_day}"
    # puts "low temp = #{low_temp} on #{low_temp_day}"
    # puts "most_humid_day = #{most_humid} on #{most_humid_day}"
  end

  def questionOne(year, folder_name)
    year = year
    folder_name = folder_name

    if Dir.exist?(folder_name) == false
      puts 'NO SUCH DIRECTORY'
      return
    end
    files_name = Dir.entries(folder_name)
    files_name = files_name.select { |name| name.include? year }
    # puts files_name

    if files_name.empty?
      puts 'NO DATA'
      return
    end

    files_name.each do |file|
      processing("#{folder_name}/#{file}")
    end

    a = $high_temp_hash.key($high_temp_hash.values.max)
    b = $low_temp_hash.key($low_temp_hash.values.min)
    c = $most_humid_hash.key($most_humid_hash.values.max)

    puts "Highest: #{$high_temp_hash[a]}C on #{a}"
    puts "Lowest: #{$low_temp_hash[b]}C on #{b}"
    puts "Humid: #{$most_humid_hash[c]}% on #{c}"
  end
end

include YearlyWeatherInfo

year = ARGV[1]
folder_name = ARGV[2]
YearlyWeatherInfo.questionOne(year, folder_name)
