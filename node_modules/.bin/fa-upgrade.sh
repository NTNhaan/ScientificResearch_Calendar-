#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir//bin/sh" ]; then
  "$basedir//bin/sh"  "$basedir/../react-native-vector-icons/bin/fa-upgrade.sh" "$@"
  ret=$?
else 
  /bin/sh  "$basedir/../react-native-vector-icons/bin/fa-upgrade.sh" "$@"
  ret=$?
fi
exit $ret
