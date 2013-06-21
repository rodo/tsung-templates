#!/usr/bin/perl

# Read tsung.dump to find errors
#
#
use strict;
use Digest::MD5 qw(md5_hex);

my $file = "tsung.dump";

open FILE, "$file" or die "Cannot open $file : ".$!;
my $time = "";
my (%err_urls);
while (<FILE>) {
    s/&amp;/&/g;
    if (/^\d+\.\d+;(.*);get;(.*);(.*);(\d{3});\d+;(.*)$/) {
	if ($4 >= 200) {
	    my $digest = md5_hex($3);
	    $err_urls{$digest}->{'url'} = $3;
	    $err_urls{$digest}->{'code'} = $4;
	    print $digest;
	}
    }
}
close FILE;
