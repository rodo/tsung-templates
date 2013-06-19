#!/usr/bin/perl

# =INFO REPORT==== 19-Jun-2013::17:23:13 ===
#   ts_config_server:(6:<0.51.0>) Session 2 choosen
#
# =INFO REPORT==== 19-Jun-2013::17:23:13 ===
#     ts_config_server:(6:<0.51.0>) Session 1 choosen
#
# =INFO REPORT==== 19-Jun-2013::17:23:13 ===
#     ts_config_server:(6:<0.51.0>) Session 1 choosen

#=INFO REPORT==== 19-Jun-2013::17:22:10 ===
#  ts_config:(5:<0.51.0>) Session name for id 1 is "one"
use strict;


my $file = 'tsung_controller@elz.log';

open FILE, "$file" or die $!;
my $time = "";
my (%sessions);
while (<FILE>) {
    if (/Session name for id (\d+) is \"(.*)\"$/) {
	$sessions{$1}->{name} = $2;
	$sessions{$1}->{count} = 0;
    }

    $time = $1 if (/^=INFO REPORT==== (.*) ===$/);
    if (/Session (\d+) choosen/) {
	$sessions{$1}->{count}++;
    }
}
close FILE;

for (keys(%sessions)) {
    printf "%d %s %d\n", $_,$sessions{$_}->{name},$sessions{$_}->{count};
}
