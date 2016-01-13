
function mappingAction(val, orderId) {
		if (val == "modify") {
			location.href="/nq/orderModifyView/"+orderId;
		} else if (val == "delete") {
			location.href="/nq/orderDelete/"+orderId;
		} else {
			return false;
		}
}