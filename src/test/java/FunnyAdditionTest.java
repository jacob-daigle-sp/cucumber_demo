import mypackage.FunnyAddition;
import org.junit.Test;

import static org.junit.Assert.*;

public class FunnyAdditionTest {
	@Test
	public void testAddShouldSum_1(){
		assertEquals(2, FunnyAddition.add(1,1));
	}

//	@Test
//	public void testAddShouldSum_2(){
//		assertEquals(8, FunnyAddition.add(4,4));
//	}

//	@Test
//	public void testAddShouldSum_overflow(){
//		assertEquals(-2147483648, FunnyAddition.add(2147483647,1));
//	}
}