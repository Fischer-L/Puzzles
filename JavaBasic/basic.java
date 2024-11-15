import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Stack;

final class Basic {
  
    @Nested
    class StringTest {

        @Test
        void getAscii() {
            String str = "abc";
            int ascii = (int) str.charAt(0);
            assertThat(ascii).isEqualTo(97);
        }

        @Test
        void fromAscii () {
            char c = (char) 97;
            String str = Character.toString(c);
            assertThat(str).isEqualTo("a");
        }

        @Test
        void loopString () {
            String str = "0123456789";
            for (int i = 0; i < str.length(); i++) {
                String c = Character.toString(str.charAt(i));
                assertThat(c).isEqualTo(Integer.toString(i));
            }

            for (int i = 0; i < str.length(); i++) {
              String c = str.substring(i, i + 1);
              assertThat(c).isEqualTo(Integer.toString(i));
            }
        }

        @Test
        void sortString () {
            String str = "dagecfb";
            char [] chars = str.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            assertThat(sorted).isEqualTo("abcdefg");
        }

        @Test
        void sortStrings () {
            String [] strs = new String [] { "d", "a", "g", "e", "c", "f", "b" };
            Arrays.sort(strs);
            String sorted = String.join("", strs);
            assertThat(sorted).isEqualTo("abcdefg");
        }

        @Test
        void reverseString () {
            String str = "abc";
            String reversed = new StringBuilder(str).reverse().toString();
            assertThat(reversed).isEqualTo("cba");
        }

        @Test
        void splitString () {
            String str = "a,b,c";
            String [] strs = str.split(",");
            assertThat(strs[0]).isEqualTo("a");
            assertThat(strs[1]).isEqualTo("b");
            assertThat(strs[2]).isEqualTo("c");
        }

        @Test
        void joinString () {
            String [] strs = new String [] { "a", "b", "c" };
            String str = String.join(",", strs);
            assertThat(str).isEqualTo("a,b,c");
        }

        @Test
        void stringToInt () {
            String s = "123";
            Integer a = Integer.valueOf(s);
            Integer b = Integer.parseInt(s);
            assertThat(a).isEqualTo(123);
            assertThat(b).isEqualTo(123);
        }
    }

    @Nested
    class MapTest {

        @Test
        void putMap () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            assertThat(map.get("key")).isEqualTo(1);
        }

        @Test
        void removeMap () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            map.remove("key");
            assertThat(map.containsKey("key")).isEqualTo(false);
        }

        @Test
        void loopMapKeys () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            for (String key : map.keySet()) {
                assertThat(key).isEqualTo("key");
            }
        }

        @Test
        void loopMapValues () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            for (Integer value : map.values()) {
                assertThat(value).isEqualTo(1);
            }
        }

        @Test
        void loopMapEntries () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            for (HashMap.Entry<String, Integer> entry : map.entrySet()) {
                String k = entry.getKey();
                Integer v = entry.getValue();
                assertThat(k).isEqualTo("key");
                assertThat(v).isEqualTo(1);
            }
            for (var entry : map.entrySet()) {
                String k = entry.getKey();
                Integer v = entry.getValue();
                assertThat(k).isEqualTo("key");
                assertThat(v).isEqualTo(1);
            }

        }

        @Test
        void getSize () {
            HashMap<String, Integer> map = new HashMap<>();
            map.put("key", 1);
            int size = map.size();
            assertThat(size).isEqualTo(1);
        }
    }

    @Nested
    class ArrayTest {

        @Test
        void create () {
            int [] arr = new int [3];
            arr[0] = 0;
            arr[1] = 1;
            arr[2] = 2;
            assertThat(arr[0]).isEqualTo(0);
            assertThat(arr[1]).isEqualTo(1);
            assertThat(arr[2]).isEqualTo(2);

            String[] strs = new String[] { "a", "b", "c" };
            assertThat(strs[0]).isEqualTo("a");
            assertThat(strs[1]).isEqualTo("b");
            assertThat(strs[2]).isEqualTo("c");
        }

        @Test
        void toArrayList () {
            String[] strs = new String[] { "a", "b", "c" };
            List<String> list = Arrays.asList(strs);
            assertThat(list.get(0)).isEqualTo("a");
            assertThat(list.get(1)).isEqualTo("b");
            assertThat(list.get(2)).isEqualTo("c");
        }
    }

    @Nested
    class ArrayListTest {

        @Test
        void add_n_get () {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(0);
            Integer v = arr.get(0);
            assertThat(v).isEqualTo(0);
        }

        @Test
        void remove () {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(0);
            arr.add(1);
            arr.add(2);
            arr.remove(1);
            Integer elem1 = arr.get(1);
            assertThat(elem1).isEqualTo(2);
        }

        @Test
        void loopArrayList () {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(0);
            arr.add(1);
            arr.add(2);
            for (int i = 0; i < arr.size(); i++) {
                Integer v = arr.get(i);
                assertThat(v).isEqualTo(i);
            }
        }

        @Test
        void sortArrayList () {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(0);
            arr.add(1);
            arr.add(2);
            arr.sort((a, b) -> b - a);
            for (int i = arr.size() - 1; i >= 0; i--) {
                Integer v = arr.get(arr.size() - i - 1);
                assertThat(v).isEqualTo(i);
            }
        }

        @Test
        void sortArrayList_String () {
            ArrayList<String> arr = new ArrayList<>();
            arr.add("a");
            arr.add("b");
            arr.add("c");
            arr.sort((a, b) -> b.compareTo(a));
            assertThat(arr.get(0)).isEqualTo("c");
            assertThat(arr.get(1)).isEqualTo("b");
            assertThat(arr.get(2)).isEqualTo("a");
            for (int i = arr.size() - 1; i >= 0; i--) {
                String v = arr.get(arr.size() - i - 1);
                assertThat(v).isEqualTo(Character.toString((char) ('a' + i)));
            }
        }
    }

    @Nested
    class SetTest {

        @Test
        void add_n_contains () {
            HashSet<Integer> set = new HashSet<>();
            set.add(0);
            boolean contains = set.contains(0);
            assertThat(contains).isEqualTo(true);
        }

        @Test
        void remove () {
            HashSet<Integer> set = new HashSet<>();
            set.add(0);
            set.add(1);
            set.remove(1);
            boolean contains = set.contains(1);
            assertThat(contains).isEqualTo(false);
        }

        @Test
        void toArray () {
            HashSet<Integer> set = new HashSet<>();
            set.add(0);
            set.add(1);
            set.add(2);
            Integer [] arr = set.toArray(new Integer[set.size()]);
            for (int i = 0; i < arr.length; i++) {
                assertThat(arr[i]).isEqualTo(i);
            }
        }
    }

    @Nested
    class StackTest {

        @Test
        void createStack () {
            Stack<Integer> stack = new Stack<>();
            stack.push(0);
            stack.push(1);
            stack.push(2);
            assertThat(stack.pop()).isEqualTo(2);
            assertThat(stack.pop()).isEqualTo(1);
            assertThat(stack.pop()).isEqualTo(0);
        }

        @Test
        void peekStack () {
            Stack<Integer> stack = new Stack<>();
            stack.push(0);
            stack.push(1);
            stack.push(2);
            assertThat(stack.peek()).isEqualTo(2);
            assertThat(stack.peek()).isEqualTo(2);
        }

        @Test
        void loopStack () {
            Stack<Integer> stack = new Stack<>();
            stack.push(0);
            stack.push(1);
            stack.push(2);
            while (stack.size() > 0) {
                stack.pop();
            }
        }
    }

    @Nested
    class HeapTest {

        @Test
        void createHeap () {
            PriorityQueue<Integer> heap = new PriorityQueue<>();
            heap.add(0);
            heap.add(1);
            heap.add(2);
            assertThat(heap.size()).isEqualTo(3);
        }

        @Test
        void peek_n_poll_Heap () {
            PriorityQueue<Integer> heap = new PriorityQueue<>();
            heap.add(0);
            heap.add(1);
            heap.add(2);
            Integer v = heap.peek();
            assertThat(v).isEqualTo(0);
            v = heap.poll();
            assertThat(v).isEqualTo(0);
            v = heap.poll();
            assertThat(v).isEqualTo(1);
        }

        @Test
        void comparatorHeap () {
            PriorityQueue<User> heap = new PriorityQueue<>((a, b) -> b.age - a.age);
            heap.add(new User(2, 20));
            heap.add(new User(1, 10));
            heap.add(new User(3, 30));
            assertThat(heap.poll().age).isEqualTo(30);
        }

        @Test
        void loopHeap () {
            PriorityQueue<Integer> heap = new PriorityQueue<>();
            heap.add(0);
            heap.add(1);
            heap.add(2);
            while (heap.size() > 0) {
                heap.poll();
            }
        }

        record User (Integer id, Integer age) {}
    }
}



