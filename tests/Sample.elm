module Sample exposing (..)

import Expect
import Fuzz
import Nested.Number8
import Test exposing (Test, describe, test)


sample : Test
sample =
    describe "Sample test"
        [ Test.fuzz Fuzz.int "fails in most cases" <|
            \number ->
                Expect.equal Nested.Number8.eight number
        ]
